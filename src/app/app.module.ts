import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { UsersModule } from './users/users.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CitasComponent } from './citas/citas.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { CitasAdminComponent } from './citas-admin/citas-admin.component';
import { HistorialComponent } from './historial/historial.component';
import { LoginPromptComponent } from './login-prompt/login-prompt.component';
import { PerfilComponent } from './perfil/perfil.component'; 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CitasComponent,
    CrearCuentaComponent,
    ContactComponent,
    LoginComponent,
    CitasAdminComponent,
    HistorialComponent,
    LoginPromptComponent,
    PerfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
