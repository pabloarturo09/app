export interface Article {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
}

export interface Guide {
  id: number;
  title: string;
  topic: string;
  content: string;
  imageUrl: string;
  completed: boolean;
}

export interface EducationalContent {
  id: number;
  title: string;
  description: string;
  content: string;
  imageUrl: string;
  examples: string[];
  progressRegistered: boolean;
}

export interface Quiz {
  id: number;
  title: string;
  topic: string;
  questions: Question[];
}

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface QuizResult {
  quizId: number;
  quizTitle: string;
  score: number;
  total: number;
  date: string;
}
