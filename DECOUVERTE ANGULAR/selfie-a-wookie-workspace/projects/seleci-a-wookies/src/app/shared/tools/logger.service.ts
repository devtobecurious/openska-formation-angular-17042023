import { Injectable, isDevMode } from '@angular/core';

const isDev = isDevMode();

export interface ToLog {
  log(message: unknown): void;
}

const logger: ToLog = {
  log(message: unknown): void {
    console.error('pouet !', message);
  }
}

@Injectable({
  providedIn: 'root',
  useFactory: () => isDev ? new LoggerService() : new ApiLoggerService()
  //useValue: logger
})
export class LoggerService implements ToLog {

  constructor() { }

  log(message: unknown): void {
    //if (isDevMode()) {
    if (typeof (message) === 'string') {
      console.log(message.toLowerCase());
    }
    //}
  }
}

export class ApiLoggerService implements ToLog {
  log(message: unknown): void {
    throw new Error('Method not implemented.');
  }
}
