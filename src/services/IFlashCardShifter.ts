import { IFlashCard } from "./../model/IFlashCard";

/**
 * An implementation of that interface is responsible for shifting up or shifting down a {@link IFlashCard}
 * depending on if an exercise was solved correctly or wrong.
 */
export interface IFlashCardShifter {
  shiftUp(flashCard: IFlashCard): void;
  shiftDown(flashCard: IFlashCard): void;
}
