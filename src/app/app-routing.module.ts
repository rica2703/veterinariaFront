import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CitasComponent } from './citas/citas.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { CitasAdminComponent } from './citas-admin/citas-admin.component';
import { HistorialComponent } from './historial/historial.component';
import { PerfilComponent } from './perfil/perfil.component';
const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'citas',component:CitasComponent
  },
  {
    path:'crearCuenta',component:CrearCuentaComponent
  },
  {
    path:'contact',component:ContactComponent
  },
{
  path:'login',component:LoginComponent
},
{
  path:'citasAdmin',component:CitasAdminComponent
},
{
  path:'historial',component:HistorialComponent
},
{path:'perfil',component:PerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
