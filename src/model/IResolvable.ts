/**
 * An implementation of this interface represents an object which is resolvable.
 */
export interface IResolvable<T> {
  fail(): void;
  onFail(handler: T): void;
  onPractice(handler: T): void;
  onSuccess(handler: T): void;
  succeed(): void;
}
