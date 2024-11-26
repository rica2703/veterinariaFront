import { Component, OnInit} from '@angular/core';
import { AuthService } from './auth.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.css'
})
export class HistorialComponent {
  citas: any[] = [];

  constructor(private authService: AuthService,private router:Router) {}
  ngOnInit(): void {
    this.cargarCitas();
  }

  cargarCitas(): void {
    this.authService.obtenerCitas().subscribe((data) => {
      this.citas = data;
    });
  }
  cerrarSesion() {
    localStorage.clear(); 
    console.log('Sesión cerrada y localStorage limpiado');
    this.router.navigate(['/']);
  }
}
