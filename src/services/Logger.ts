import { ILogger } from "./ILogger";

class LoggerDefault implements ILogger {
  logError(message: string): void {
    console.error(message);
  }

  logInformation(message: string): void {
    console.info(message);
  }

  logWarning(message: string): void {
    console.warn(message);
  }
}

export const Logger: ILogger = new LoggerDefault();
