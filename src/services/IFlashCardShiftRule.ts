import { IFlashCard } from "../model/IFlashCard";
import { IFlashCardSection } from "../model/IFlashCardSection";

/**
 * An implementation of this interface represents a flash card shift rule.
 * It is responsible for determining if a {@link IFlashCard} needs to be shifted up to the next section, if a {@link IFlashCard} exercise was solved correctly
 * or needs to be shifted down, if a {@link IFlashCard} exercise was failed.
 */
export interface IFlashCardShiftRule {
  needsShiftUp(
    flashCardSection: IFlashCardSection,
    flashCard: IFlashCard
  ): boolean;

  needsShiftDown(
    flashCardSection: IFlashCardSection,
    flashCard: IFlashCard
  ): boolean;
}
