import { IFlashCard } from "./IFlashCard";
import { IFlashCardSection } from "./IFlashCardSection";

export class FlashCardSection implements IFlashCardSection {
  private flashCards = new Map<IFlashCard, IFlashCard>();
  id: number = 0;
  follower: IFlashCardSection | undefined = undefined;
  predecessor: IFlashCardSection | undefined = undefined;

  constructor(flashCards?: IFlashCard[]) {
    if (flashCards !== undefined) {
      flashCards.forEach((flashCard) =>
        this.flashCards.set(flashCard, flashCard)
      );
    }
  }

  addFlashCard(flashCard: IFlashCard): void {
    this.flashCards.set(flashCard, flashCard);
  }

  findAllFlashCards(
    excludedFlashCards?: IFlashCard[] | undefined
  ): IFlashCard[] {
    const resultFlashCards: IFlashCard[] = [];
    this.flashCards.forEach((flashCard) => {
      if (!excludedFlashCards?.includes(flashCard)) {
        resultFlashCards.push(flashCard);
      }
    });
    return resultFlashCards;
  }

  removeFlashCard(flashCard: IFlashCard): void {
    this.flashCards.delete(flashCard);
  }
}
