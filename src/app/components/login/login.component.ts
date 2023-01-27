import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  isLogged = true;
  constructor(private authService: AuthService) {}
  ngOnInit() {}
  login() {
    this.isLogged = this.authService.isAuthentified();
  }
}
