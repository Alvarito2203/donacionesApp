import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { InicioComponent } from './principal/inicio/inicio.component';
import { InicioSesionComponent } from './autenticacion/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './autenticacion/registro/registro.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: '', component: InicioComponent }, // Página principal
      { path: 'inicio', component: InicioComponent },
      { path: 'login', component: InicioSesionComponent },
      { path: 'registro', component: RegistroComponent },
      {path: '**', redirectTo: '/inicio'}
    ])
  ]
};