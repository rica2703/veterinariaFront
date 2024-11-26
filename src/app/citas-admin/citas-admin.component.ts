import { Component, OnInit } from '@angular/core';
import { AuthService } from '../citas-admin/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-citas-admin',
  templateUrl: './citas-admin.component.html',
  styleUrl: './citas-admin.component.css'
})
export class CitasAdminComponent implements OnInit{
  citas: any[] = [];
  citaSeleccionada: any = null;

  constructor(private authService: AuthService,private router:Router) {}

  // ngOnInit(): void {
  //   this.authService.obtenerCitas().subscribe((data) => {
  //     this.citas = data;
  //   });
  // }

  confirmarEliminar(id: string): void {
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar esta cita?');
    if (confirmacion) {
      this.eliminarCita(id);
    }
  }

  eliminarCita(id: string): void {
    this.authService.eliminarCita(id).subscribe(() => {
      this.cargarCitas(); 
    }, (error) => {
      console.error('Error al eliminar la cita:', error);
    });
  }

  // editarCita(id: string): void {
  //   console.log(`Editar cita con ID: ${id}`);
  // }
  ngOnInit(): void {
    this.cargarCitas();
  }

  cargarCitas(): void {
    this.authService.obtenerCitas().subscribe((data) => {
      this.citas = data;
    });
  }

  mostrarFormulario(cita: any): void {
    this.citaSeleccionada = { ...cita }; 
  }

  cerrarFormulario(): void {
    this.citaSeleccionada = null;
  }

  guardarEdicion(): void {
    this.authService.editarCita(this.citaSeleccionada._id, this.citaSeleccionada)
      .subscribe(() => {
        this.cargarCitas(); 
        this.cerrarFormulario();
      }, (error) => {
        console.error('Error al guardar la edición', error);
      });
  }
  cerrarSesion() {
    localStorage.clear(); 
    console.log('Sesión cerrada y localStorage limpiado');
    this.router.navigate(['/']);
  }
  
}
