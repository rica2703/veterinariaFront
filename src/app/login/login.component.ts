import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSignin() {
    
    if (!this.username || !this.password) {
      alert('Por favor, llena ambos campos');
      return;
    }
    if(this.username==="admin"&&this.password==="parangar01"){
      this.authService.signin({ username: this.username, password: this.password }).subscribe(
        (response: any) => {
          
          localStorage.setItem('username', response.username);
          localStorage.setItem('foto', response.foto);
          this.router.navigate(['/citasAdmin']);
          // alert('Inicio de sesión exitoso');
        },
        (error) => {
          console.error('Error en el inicio de sesión:', error);
          alert('Credenciales inválidas o error en el servidor');
        }
      );
      // alert("entro como admin")
    }
    else {
    
    this.authService.signin({ username: this.username, password: this.password }).subscribe(
      (response: any) => {
        
        localStorage.setItem('username', response.username);
        localStorage.setItem('foto', response.foto);

        // alert('Inicio de sesión exitoso');
        this.router.navigate(['/']); 
      },
      (error) => {
        console.error('Error en el inicio de sesión:', error);
        alert('Credenciales inválidas o error en el servidor');
      }
    );
  }
  }
}
