import { IExercise } from "./IExercise";

export type EventHandler = () => void;
export type EventHandlers = EventHandler[];
export type ExerciseEventHandler = (exercise: IExercise) => void;
