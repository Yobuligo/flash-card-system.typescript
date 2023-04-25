import { IFlashCard } from "../model/IFlashCard";
import { IExercise } from "./../model/IExercise";

/**
 * An implementation of this interface is responsible for creating instances of {@link IExercise}.
 */
export interface IExerciseFactory {
  create(flashCard: IFlashCard): IExercise;
}
