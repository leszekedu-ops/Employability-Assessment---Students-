export type Category = 
  | 'Communication'
  | 'Teamwork'
  | 'Presentation Skills'
  | 'Leadership'
  | 'Critical Thinking'
  | 'Professionalism'
  | 'Resilience'
  | 'Initiative';

export interface Option {
  text: string;
  points: number;
}

export interface Question {
  id: number;
  category: Category;
  text: string;
  options: Option[];
}

export interface UserState {
  firstName: string;
  surname: string;
}

export type Scores = Record<Category, number>;

export const CATEGORIES: Category[] = [
  'Communication',
  'Teamwork',
  'Presentation Skills',
  'Leadership',
  'Critical Thinking',
  'Professionalism',
  'Resilience',
  'Initiative'
];