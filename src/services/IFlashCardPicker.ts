import { IFlashCard } from "../model/IFlashCard";

export interface IFlashCardPicker {
  next(excludedFlashCards?: IFlashCard[]): IFlashCard;
}
