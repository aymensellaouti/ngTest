import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authenticated = false;
  constructor() {}
  isAuthentified(): boolean {
    this.authenticated = !!localStorage.getItem('user');
    return this.authenticated;
  }
}
