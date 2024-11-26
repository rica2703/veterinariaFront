import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent {
  user = {
    username: '',
    email: '',
    password: '',
  };
  selectedFile: File | null = null;

  constructor(private router: Router, private authService: AuthService) { }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  crearCuenta() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('username', this.user.username);
      formData.append('email', this.user.email);
      formData.append('password', this.user.password);
      formData.append('foto', this.selectedFile);

      this.authService.signup(formData).subscribe({
        next: (res) => {
          alert('Cuenta creada con éxito');
          localStorage.setItem('username', res.usuario.username);
        localStorage.setItem('foto', res.usuario.foto);
          this.router.navigate(['/citas']);
        },
        error: (err) => {
          console.error(err);
          alert('Hubo un error al crear la cuenta.');
        }
      });
    } else {
      alert('Por favor selecciona una foto.');
    }
  }
}
