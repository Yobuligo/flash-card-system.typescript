import { ExerciseState } from "./ExerciseState";
import { IFlashCard } from "./IFlashCard";
import { IResolvable } from "./IResolvable";
import { ExerciseEventHandler } from "./Types";

/**
 * An implementation of this interface represents an exercise which has a {@link IFlashCard} assigned which has to be learned.
 */
export interface IExercise extends IResolvable<ExerciseEventHandler> {
  readonly flashCard: IFlashCard;
  readonly isSolved: boolean;
  readonly state: ExerciseState;
}
