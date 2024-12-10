import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { token } from '../../../models/token.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login(this.username, this.password).subscribe({
      next: (res: token) => {
        console.log('Respuesta del servidor:', res);
        if (res.token) {
          localStorage.setItem('token', res.token);
          console.log('Token guardado:', res.token);
          this.router.navigateByUrl('/home');
        } else {
          console.error('No se recibió un token');
        }
      },
      error: (error) => {
        console.error('Error durante el inicio de sesión:', error);
      }
    });
  }

  goToRegister(){
    this.router.navigateByUrl('/register');
  }
}
