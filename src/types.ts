export interface SolutionSubItem {
  name: string;
  description: string;
  tags?: string[];
}

export interface SolutionCategory {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  items: SolutionSubItem[];
  technologies: string[];
  featuredUseCase: string;
}

export interface ApproachStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  activities: string[];
  deliverable: string;
  icon: string;
}

export interface WhyChoosePillar {
  id: string;
  title: string;
  description: string;
  highlight: string;
  icon: string;
}

export interface IndustryUseCase {
  id: string;
  name: string;
  tagline: string;
  keySolutions: string[];
  icon: string;
}

export interface EstimateOptions {
  solutionType: string[];
  scale: 'startup' | 'sme' | 'enterprise';
  aiIntegration: boolean;
  cloudDeploy: boolean;
  timelineUrgency: 'standard' | 'expedited';
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceInterest: string;
  message: string;
}
