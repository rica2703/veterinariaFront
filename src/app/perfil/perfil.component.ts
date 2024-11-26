import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  username: string | null = '';
  foto: string | null = '';
  correo: string | null = '';
  citas: any[] = []; 
  citasFiltradas: any[] = []; 
  isLoggedIn: boolean = false;
  showAlert: boolean = false;

  constructor(private authService: AuthService,private router:Router) {}

  ngOnInit() {
    this.username = localStorage.getItem('username');
    this.foto = localStorage.getItem('foto');
    this.correo = localStorage.getItem('correo');

    if (!this.username) {
      this.showAlert = true;
    } else {
    this.authService.getCitas().subscribe(
      (response: any[]) => {
        this.citas = response;

        this.citasFiltradas = this.citas.filter(
          (cita) => cita.username === this.username
        );
      },
      (error) => {
        console.error('Error al obtener las citas:', error);
      }
    );
  }
}
  onLogout() {
    localStorage.clear();
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }
  cerrarAlerta() {
    this.showAlert = false;
    this.router.navigate(['/']);
  }
}
