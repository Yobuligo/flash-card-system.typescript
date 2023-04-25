import { ExerciseState } from "./ExerciseState";
import { IFlashCard } from "./IFlashCard";

/**
 * An implementation of this interface represents an exercise which has a {@link IFlashCard} assigned which has to be learned. 
 */
export interface IExercise {
  readonly flashCard: IFlashCard;
  readonly isSolved: boolean;
  readonly state: ExerciseState;
}
