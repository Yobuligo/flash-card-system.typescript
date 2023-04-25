import { EventHandlerRepository } from "../services/EventHandlerRepository";
import { IFlashCard } from "./IFlashCard";
import { EventHandler } from "./Types";

export class FlashCard implements IFlashCard {
  private _numberSuccessfulAnswers: number;
  private static eventHandlerRepository =
    new EventHandlerRepository<EventHandler>((handler) => handler());

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

  fail(): void {
    if (this._numberSuccessfulAnswers > 0) {
      this._numberSuccessfulAnswers--;
    }
    FlashCard.eventHandlerRepository.publishOnFail();
    FlashCard.eventHandlerRepository.publishOnPractice();
  }

  onFail(handler: EventHandler): void {
    FlashCard.eventHandlerRepository.addFailHandler(handler);
  }

  onPractice(handler: EventHandler): void {
    FlashCard.eventHandlerRepository.addPracticeHandler(handler);
  }

  onSuccess(handler: EventHandler): void {
    FlashCard.eventHandlerRepository.addSuccessHandler(handler);
  }

  succeed(): void {
    this._numberSuccessfulAnswers++;
    FlashCard.eventHandlerRepository.publishOnSucceed();
    FlashCard.eventHandlerRepository.publishOnPractice();
  }
}
