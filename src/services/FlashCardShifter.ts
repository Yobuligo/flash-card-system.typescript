import { IFlashCard } from "../model/IFlashCard";
import { IFlashCardShiftRule } from "./IFlashCardShiftRule";
import { IFlashCardShifter } from "./IFlashCardShifter";
import { Logger } from "./Logger";

export class FlashCardShifter implements IFlashCardShifter {
  constructor(private flashCardShiftRule: IFlashCardShiftRule) {}

  shiftUp(flashCard: IFlashCard): void {
    if (
      flashCard.flashCardSection.follower !== undefined &&
      this.flashCardShiftRule.needsShiftUp(flashCard)
    ) {
      flashCard.flashCardSection = flashCard.flashCardSection.follower;
      Logger.logInformation(
        `Flash card '${flashCard.id}' was shifted up to '${flashCard.flashCardSection.id}' flash card section.`
      );
    }
  }

  shiftDown(flashCard: IFlashCard): void {
    if (
      flashCard.flashCardSection.predecessor !== undefined &&
      this.flashCardShiftRule.needsShiftDown(flashCard)
    ) {
      flashCard.flashCardSection = flashCard.flashCardSection.predecessor;
      Logger.logInformation(
        `Flash card '${flashCard.id}' was shifted down to '${flashCard.flashCardSection.id}' training section.`
      );
    }
  }
}
