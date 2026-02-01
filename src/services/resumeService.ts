import { ResumeData } from '../types/resume';
import yaml from 'js-yaml';

// GitHub Gist URL for your resume YAML files
// Update these with your actual Gist raw URLs after uploading your CV YAMLs to Gist
const USERNAME = 'TheMattBin';
const GIST_IDS = {
  portfolio: '1ac7d474777a9c4259b42320a7051307',
  full: '5aca84c2f7fac248101812681009e9b1',
};

export type ResumeType = 'portfolio' | 'full';

// Transform YAML CV structure to ResumeData format
const transformYamlToResumeData = (yamlData: any): ResumeData => {
  const cv = yamlData.cv;
  
  return {
    profile: {
      name: cv.name,
      headline: cv.headline,
      location: cv.location,
      email: cv.email,
      photo: cv.photo,
      social_networks: cv.social_networks || [],
      summary: cv.sections?.summary || []
    },
    experience: (cv.sections?.experience || []).map((exp: any) => ({
      company: exp.company,
      position: exp.position,
      start_date: exp.start_date,
      end_date: exp.end_date,
      location: exp.location,
      summary: exp.summary ? [exp.summary] : (exp.highlights || []),
      highlights: exp.highlights || []
    })),
    projects: (cv.sections?.projects || []).map((proj: any) => ({
      name: proj.name,
      date: proj.date,
      start_date: proj.start_date,
      end_date: proj.end_date,
      location: proj.location,
      summary: proj.summary,
      highlights: proj.highlights || []
    })),
    publications: (cv.sections?.publications || []).map((pub: any) => ({
      title: pub.title,
      authors: pub.authors || [],
      doi: pub.doi,
      journal: pub.journal,
      date: pub.date
    })),
    skills: (cv.sections?.skills || []).map((skill: any) => ({
      label: skill.label,
      details: skill.details
    })),
    education: (cv.sections?.education || []).map((edu: any) => ({
      institution: edu.institution,
      area: edu.area,
      degree: edu.degree,
      start_date: edu.start_date,
      end_date: edu.end_date,
      location: edu.location,
      highlights: edu.highlights || []
    }))
  };
};

export const fetchResumeData = async (type: ResumeType = 'portfolio'): Promise<ResumeData> => {
  const gistId = GIST_IDS[type];
  const rawUrl = `https://gist.githubusercontent.com/${USERNAME}/${gistId}/raw`;
  const response = await fetch(rawUrl);
  if (!response.ok) {
    throw new Error(`Failed to fetch resume: ${response.status}`);
  }
  const yamlText = await response.text();
  const yamlData = yaml.load(yamlText);
  return transformYamlToResumeData(yamlData);
};
