import { Exercise } from "../model/Exercise";
import { IExercise } from "../model/IExercise";
import { IFlashCard } from "../model/IFlashCard";
import { IExerciseFactory } from "./IExerciseFactory";

export class ExerciseFactory implements IExerciseFactory {
  create(flashCard: IFlashCard): IExercise {
    return new Exercise(flashCard);
  }
}
