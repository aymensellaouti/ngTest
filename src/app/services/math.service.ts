import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  constructor() { }

  add(a: number, b: number): number {
    return a + b;
  }
  substract(a: number, b: number): number {
    return a - b;
  }
}
