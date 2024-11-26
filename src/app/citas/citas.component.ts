import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent {
  cita = {
    username: '',
    foto: '',
    nombreDueno: '',
    fecha: '',
    hora: '',
    telefono: '',
    nombreMascota: '',
    tipoAnimal: '',
    edad: '',
    raza: '',
    motivo: ''
  };
  showLoginPrompt = false;
  isLoggedIn: boolean = false;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    const username = localStorage.getItem('username');
    this.isLoggedIn = !!username;
    if (!username) {
      this.showLoginPrompt = true; 
    }
  }
  onCrearCita() {
    
    const username = localStorage.getItem('username');
    const foto = localStorage.getItem('foto');

   
    if (!username || !foto) {
      this.showLoginPrompt = true;
      return;
    }

  
    this.cita.username = username;
    this.cita.foto = foto;

   
    this.authService.crearCita(this.cita).subscribe(
      (response: any) => {
        alert('Cita creada exitosamente');
        if(username==='admin'){
          // alert('entro')
          this.router.navigate(['/citasAdmin']);
        }
        else{
          this.router.navigate(['/']); 
        }
      },
      (error) => {
        console.error('Error al crear la cita:', error);
        alert('Ocurrió un error al crear la cita.');
      }
    );
  }
  closeLoginPrompt() {
    this.showLoginPrompt = false; 
  }
  onLogout() {
    localStorage.clear();
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }
  
}
