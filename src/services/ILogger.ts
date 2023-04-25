/**
 * An implementation of this interface is responsible for logging messages.
 */
export interface ILogger {
  logError(message: string): void;
  logInformation(message: string): void;
  logWarning(message: string): void;
}
