export interface IQuestionsState {
  questions: IQuestions;
  selectedQuestion: IQuestion | null;
  // loading: boolean;
  error: string | null;
}
export interface IQuestions {
  [key: string]: IQuestion;
}
export interface IQuestion {
  id: string;
  author: string;
  timestamp: number;
  optionOne: {
    votes: string[];
    text: string;
  };
  optionTwo: {
    votes: string[];
    text: string;
  };
}
export interface IAddQuestion {
  author: string;
  optionOneText: string;
  optionTwoText: string;
}
