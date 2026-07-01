export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  featured: boolean;
  description: string;
  skills: string[];
  experience: string;
}