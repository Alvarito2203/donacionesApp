// inicio-sesion.component.ts - Componente de inicio de sesión
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class InicioSesionComponent {
  formularioSesion: FormGroup;
  mensajeError: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.formularioSesion = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async iniciarSesion() {
    if (this.formularioSesion.valid) {
      const { correo, contrasena } = this.formularioSesion.value;
      const respuesta = await this.authService.iniciarSesion(correo, contrasena);
      if (respuesta.exito) {
        this.router.navigate(['/perfil']);
      } else {
        this.mensajeError = respuesta.mensaje;
      }
    }
  }

  async iniciarSesionConGoogle() {
    const respuesta = await this.authService.iniciarSesionConGoogle();
    if (respuesta.exito) {
      this.router.navigate(['/perfil']);
    } else {
      
    }
  }
}