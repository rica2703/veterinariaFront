import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CitasComponent } from './citas/citas.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {
    path:'home',component:HomeComponent
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
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
