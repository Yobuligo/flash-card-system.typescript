import { EventHandlerRepository } from "../services/EventHandlerRepository";
import { ExerciseState } from "./ExerciseState";
import { IExercise } from "./IExercise";
import { IFlashCard } from "./IFlashCard";
import { ExerciseEventHandler } from "./Types";

export class Exercise implements IExercise {
  private _isSolved = false;
  private _state = ExerciseState.Open;
  private eventHandlerRepository =
    new EventHandlerRepository<ExerciseEventHandler>((handler) =>
      handler(this)
    );

  public constructor(readonly flashCard: IFlashCard) {}

  fail(): void {
    if (this.isSolved) {
      return;
    }
    this._state = ExerciseState.Failed;
    this.flashCard.fail();
    this.eventHandlerRepository.publishOnFail();
    this.eventHandlerRepository.publishOnPractice();
  }

  get isSolved(): boolean {
    return this._isSolved;
  }

  onFail(handler: ExerciseEventHandler): void {
    this.eventHandlerRepository.addFailHandler(handler);
  }

  onPractice(handler: ExerciseEventHandler): void {
    this.eventHandlerRepository.addPracticeHandler(handler);
  }

  onSuccess(handler: ExerciseEventHandler): void {
    this.eventHandlerRepository.addSuccessHandler(handler);
  }

  get state(): ExerciseState {
    return this._state;
  }

  succeed(): void {
    if (this.isSolved) {
      return;
    }
    this._state = ExerciseState.Succeeded;
    this.flashCard.succeed();
    this.eventHandlerRepository.publishOnSucceed();
    this.eventHandlerRepository.publishOnPractice();
  }
}
