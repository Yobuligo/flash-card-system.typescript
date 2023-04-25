import { IEventHandlerRepository } from "./IEventHandlerRepository";

export class EventHandlerRepository<T> implements IEventHandlerRepository<T> {
  private onFailHandlers: T[] = [];
  private onPracticeHandlers: T[] = [];
  private onSuccessHandlers: T[] = [];

  constructor(private caller: (callable: T) => void) {}

  addFailHandler(handler: T): void {
    this.onFailHandlers.push(handler);
  }

  addSuccessHandler(handler: T): void {
    this.onSuccessHandlers.push(handler);
  }

  addPracticeHandler(handler: T): void {
    this.onPracticeHandlers.push(handler);
  }

  publishOnFail() {
    this.onFailHandlers.forEach((handler) => this.caller(handler));
  }

  publishOnPractice() {
    this.onPracticeHandlers.forEach((handler) => this.caller(handler));
  }

  publishOnSucceed() {
    this.onSuccessHandlers.forEach((handler) => this.caller(handler));
  }
}
