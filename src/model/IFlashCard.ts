import { IFlashCardSection } from "./IFlashCardSection";
import { IResolvable } from "./IResolvable";
import { EventHandler } from "./Types";

/**
 * An implementation of this interface represents a flash card.
 * A flash card contains content which has to be learned. The Content is represented by a {@link question} with a corresponding {@link answer}.
 */
export interface IFlashCard extends IResolvable<EventHandler> {
  readonly answer: string;
  flashCardSection: IFlashCardSection;
  readonly id: string;
  readonly numberSuccessfulAnswers: number;
  readonly question: string;
}
