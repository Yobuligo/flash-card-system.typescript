import { EventHandlerRepository } from "../services/EventHandlerRepository";
import { Logger } from "../services/Logger";
import { IFlashCard } from "./IFlashCard";
import { IFlashCardSection } from "./IFlashCardSection";
import { EventHandler } from "./Types";

export class FlashCard implements IFlashCard {
  private _flashCardSection?: IFlashCardSection = undefined;
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

  get flashCardSection(): IFlashCardSection {
    return this._flashCardSection!;
  }

  set flashCardSection(value: IFlashCardSection) {
    // detach from current flash card section
    this._flashCardSection?.removeFlashCard(this);

    // attach to new flash card section
    value.addFlashCard(this);
    this._flashCardSection = value;
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
    Logger.logInformation(
      `Flash card '${this.id}' was not guessed correctly. You dropped back down to '${this.numberSuccessfulAnswers}'.`
    );
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
    Logger.logInformation(
      `Flash card '${this.id}' was guessed correctly '${this.numberSuccessfulAnswers}' times`
    );
  }
}
