import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'inicio', loadChildren: () => import('./principal/principal.module').then(m => m.PrincipalModule) },
  { path: 'autenticacion', loadChildren: () => import('./autenticacion/autenticacion.module').then(m => m.AutenticacionModule) },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', redirectTo: '/inicio' } // Página por defecto en caso de URL no encontrada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
