import { EventHandler, EventHandlers } from "../core/Types";
import { IFlashCard } from "./IFlashCard";

export class FlashCard implements IFlashCard {
  private _numberSuccessfulAnswers: number;
  private onFailHandlers: EventHandlers = [];
  private onPracticeHandlers: EventHandlers = [];
  private onSuccessHandlers: EventHandlers = [];

  public constructor(
    public readonly id: string,
    numberSuccessfulAnswers: number,
    public readonly question: string,
    public readonly answer: string
  ) {
    this._numberSuccessfulAnswers = numberSuccessfulAnswers;
  }

  get numberSuccessfulAnswers(): number {
    return this._numberSuccessfulAnswers;
  }

  failed(): void {
    if (this._numberSuccessfulAnswers > 0) {
      this._numberSuccessfulAnswers--;
    }
    this.publishOnFailed();
    this.publishOnPractice();
  }

  onFail(handler: EventHandler): void {
    this.onFailHandlers.push(handler);
  }

  onPractice(handler: EventHandler): void {
    this.onPracticeHandlers.push(handler);
  }

  onSuccess(handler: EventHandler): void {
    this.onSuccessHandlers.push(handler);
  }

  succeed(): void {
    this._numberSuccessfulAnswers++;
    this.publishOnSucceed();
    this.publishOnPractice();
  }

  private publishOnFailed() {
    this.onFailHandlers.forEach((handler) => handler());
  }

  private publishOnPractice() {
    this.onPracticeHandlers.forEach((handler) => handler());
  }

  private publishOnSucceed() {
    this.onSuccessHandlers.forEach((handler) => handler());
  }
}
