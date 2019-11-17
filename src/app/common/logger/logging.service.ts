import { Injectable, isDevMode, Inject, InjectionToken } from '@angular/core';

export const LOG_CONFIG = new InjectionToken<string>('LoggingConfig')

export const isDebugMode = true
const noop = (): any => undefined;

export class LoggingConfig {
  level?: LogLevel = 0
}
@Injectable()
export class LoggingService {

  constructor(@Inject(LOG_CONFIG) private config: LoggingConfig) { }

  get info() {
    if (isDebugMode && this.config.level<= LogLevel.info) {
      return console.info.bind(console);
    } else {
      return noop;
    }
  }
  get warn() {
    if (isDebugMode && this.config.level<= LogLevel.warn) {
      return console.warn.bind(console);
    } else {
      return noop;
    }
  }
  get error() {
    if (isDebugMode && this.config.level<= LogLevel.error) {
      return console.error.bind(console);
    } else {
      return noop;
    }
  }


  invokeConsoleMethod(type: string, args?: any): void {
    const logFn: Function = (console)[type] || console.log || noop;
    logFn.apply(console, [args]);
  }
}


export enum LogLevel{
  all = 0,
  info = 1,
  warn = 2,
  error = 3,
  mute = 5
  
}


