import { EventHandler } from "../core/Types";

/**
 * An implementation of this interface represents a flash card.
 * A flash card contains content which has to be learned. The Content is represented by a {@link question} with a corresponding {@link answer}.
 */
export interface IFlashCard {
  readonly answer: string;
  readonly id: string;
  readonly numberSuccessfulAnswers: number;
  readonly question: string;
  failed(): void;
  onFail(handler: EventHandler): void;
  onPractice(handler: EventHandler): void;
  onSuccess(handler: EventHandler): void;
  succeed(): void;
}
