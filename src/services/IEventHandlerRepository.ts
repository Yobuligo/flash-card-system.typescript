/**
 * An implementation of this interface is responsible to administer event handlers.
 */
export interface IEventHandlerRepository<T> {
  addFailHandler(handler: T): void;
  addSuccessHandler(handler: T): void;
  addPracticeHandler(handler: T): void;
  publishOnFail(): void;
  publishOnPractice(): void;
  publishOnSucceed(): void;
}
