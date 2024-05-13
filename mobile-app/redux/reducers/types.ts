export type Question = {
  id: string;
  question: string;
  options: string[];
  answer: string;
};

export type Quiz = {
  id: string;
  title: string;
  questions: Question[];
};

export type Quizzes = Quiz[];
