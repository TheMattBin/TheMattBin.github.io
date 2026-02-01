export interface SocialNetwork {
  network: string;
  username: string;
}

export interface Profile {
  name: string;
  headline: string;
  location: string;
  email: string;
  social_networks: SocialNetwork[];
  summary: string[];
  photo?: string;
}

export interface Experience {
  company: string;
  position: string;
  start_date: string;
  end_date: string;
  location: string;
  summary?: string[];
  highlights: string[];
}

export interface Project {
  name: string;
  date?: string;
  start_date?: string;
  end_date?: string;
  location?: string;
  summary: string;
  highlights: string[];
}

export interface Publication {
  title: string;
  authors: string[];
  doi?: string;
  journal?: string;
  date?: string;
  url?: string;
}

export interface Skill {
  label: string;
  details: string;
}

export interface Education {
  institution: string;
  area: string;
  degree: string;
  start_date: string;
  end_date: string;
  location: string;
  highlights: string[];
}

export interface ResumeData {
  profile: Profile;
  experience: Experience[];
  projects: Project[];
  publications: Publication[];
  skills: Skill[];
  education: Education[];
}
