import { IFlashCard } from "./IFlashCard";

export class FlashCard implements IFlashCard {
  private _numberSuccessfulAnswers: number;
  private onPracticedHandlers: (() => void)[] = [];

  public constructor(
    public readonly id: string,
    numberSuccessFulAnswers: number,
    public readonly question: string,
    public readonly answer: string
  ) {
    this._numberSuccessfulAnswers = numberSuccessFulAnswers;
  }

  get numberSuccessFulAnswers(): number {
    return this._numberSuccessfulAnswers;
  }

  failed(): void {
    if (this._numberSuccessfulAnswers > 0) {
      this._numberSuccessfulAnswers--;
    }
    this.publishOnPracticed();
  }

  onPracticed(onPracticedHandler: () => void): void {
    this.onPracticedHandlers.push(onPracticedHandler);
  }

  succeed(): void {
    this._numberSuccessfulAnswers++;
    this.publishOnPracticed();
  }

  private publishOnPracticed() {
    this.onPracticedHandlers.forEach((onPracticeHandler) =>
      onPracticeHandler()
    );
  }
}
