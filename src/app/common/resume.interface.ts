import { Duration } from './duration.interface';

export interface Resume {
  email: string;
  title: string;
  workExperience: Experience[];
  languages: Language[];
  certificates: Certificate[];
  education: Education[];
  projects: Project[];
  skills: Skill[];
  interestes: string[];
}

export interface Language {
  name: string;
  skillLavel: string;
  skillValue: number;
}

export interface Skill {
  skillName: string;
  tag: string[];
  skillconfidenceValue: number;
}

export interface Experience {
  companyName: string;
  companyUrl: string;
  position: string;
  duration: Duration;
  isPresentCompany: boolean;
  description: string;
  location: string;
}
export interface Education {
  universityName: string;
  course: string;
  universityLocation: {
    address: string;
    state: string;
    country: string;
  };
  iscurrentUniversity: boolean;
  description: string;
  projects: Project[];
  duration: Duration;
  universityUrl: string;
}
export interface Project {
  projectName: string;
  title: string;
  duration: Duration;
  description: string;
  projectUrl: string;
  features: string[];
}
export interface Certificate {
  name: string;
  organisation: string;
  url: string;
  issueDate: Date;
}
