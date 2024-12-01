import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  username: string = '';
  password: string = '';

  constructor(private router: Router, private auth: AuthService, private alert: AlertService){}
  
  register(){
    this.auth.register(this.username, this.password).subscribe((res: any) => {
      this.alert.success(
        "¡Registro exitoso!", 
        "¡Te has registrado con éxito!", 
        "¡Eso es!",
        "#7a7a7a"
      );
      this.router.navigateByUrl('');
    });
  }

  goToLogin(){
    this.router.navigateByUrl('');
  }
}
