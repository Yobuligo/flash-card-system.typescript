import { error, repeat } from "../core/Functions";
import { IFlashCard } from "../model/IFlashCard";
import { IFlashCardSection } from "../model/IFlashCardSection";
import { IFlashCardPicker } from "./IFlashCardPicker";

export class FlashCardPicker implements IFlashCardPicker {
  constructor(private flashCardSections: IFlashCardSection[]) {}

  next(excludedFlashCards?: IFlashCard[]): IFlashCard {
    const flashCards = this.buildFlashCardList(excludedFlashCards);
    const percent = Math.random() * flashCards.length;
    const next = Math.ceil(percent);
    return (
      flashCards.at(next - 1) ??
      error(`Error when picking training symbol. Training symbol is undefined`)
    );
  }

  private buildFlashCardList(excludedFlashCards?: IFlashCard[]): IFlashCard[] {
    let size = this.flashCardSections.length;
    const flashCards: IFlashCard[] = [];
    this.flashCardSections.forEach((flashCardSection) => {
      const times = this.calcBinaryNumber(size);
      flashCardSection
        .findAllFlashCards(excludedFlashCards)
        .forEach((flashCard) =>
          repeat(times, () => flashCards.push(flashCard))
        );
      size--;
    });
    return flashCards;
  }

  private calcBinaryNumber(size: number): number {
    let cursor: number = 1;
    let result: number = 1;
    while (cursor < size) {
      result = result * 2;
      cursor++;
    }
    return result;
  }
}
