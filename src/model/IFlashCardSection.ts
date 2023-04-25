import { IFlashCard } from "./IFlashCard";

/**
 * An implementation of this interface represents a flash card section, which contains of {@link IFlashCard}s.
 * A flash card section represents a learning progress of a {@link IFlashCard}.
 * When solving {@link IFlashCard} in exercises the learning progress improved and the {@link IFlashCard} moves up to the next {@link IFlashCardSection}.
 */
export interface IFlashCardSection {
  id: number;
  follower: IFlashCardSection | undefined;
  predecessor: IFlashCardSection | undefined;
  addFlashCard(flashCard: IFlashCard): void;
  findAllFlashCards(excludedFlashCards?: IFlashCard[]): IFlashCard[];
  removeFlashCard(flashCard: IFlashCard): void;
}
