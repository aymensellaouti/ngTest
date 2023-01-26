import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class MathService {
  constructor(private logger: LoggerService) {}

  add(a: number, b: number): number {
    this.logger.log(`${a} + ${b} = ${a + b}`);
    return a + b;
  }
  substract(a: number, b: number): number {
    this.logger.log(`${a} - ${b} = ${a - b}`);
    return a - b;
  }
}
