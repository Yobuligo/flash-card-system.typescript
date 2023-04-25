export interface IFlashCard {
  readonly id: string;
  readonly numberSuccessFulAnswers: number;
  readonly question: string;
  readonly answer: string;
  failed(): void;
  onPracticed(onPracticedHandler: () => void): void;
  succeed(): void;
}
