// auth.service.ts - Servicio de autenticación con Firebase
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router
  ) {}

  // Registrar usuario con correo y contraseña
  async registrarUsuario(correo: string, contrasena: string, rol: string) {
    try {
      const credencialUsuario = await this.afAuth.createUserWithEmailAndPassword(correo, contrasena);
      const usuario = credencialUsuario.user;
      if (usuario) {
        await this.firestore.collection('usuarios').doc(usuario.uid).set({
          correo,
          rol,
          uid: usuario.uid
        });
        await usuario.sendEmailVerification();
        return { exito: true, mensaje: 'Registro exitoso, verifica tu correo electrónico.' };
      }
    } catch (error) {
      return { exito: false, mensaje: (error as any).message };
    }
    return { exito: false, mensaje: 'No se pudo completar el registro.' };
  }

  // Iniciar sesión con correo y contraseña
  async iniciarSesion(correo: string, contrasena: string) {
    try {
      const credencialUsuario = await this.afAuth.signInWithEmailAndPassword(correo, contrasena);
      const usuario = credencialUsuario.user;
      if (usuario && usuario.emailVerified) {
        return { exito: true, usuario };
      } else {
        return { exito: false, mensaje: 'Verifica tu correo antes de iniciar sesión.' };
      }
    } catch (error) {
      return { exito: false, mensaje: (error as any).message };
    }
  }

  // Iniciar sesión con Google
  async iniciarSesionConGoogle() {
    try {
      const proveedor = new firebase.auth.GoogleAuthProvider();
      const credencialUsuario = await this.afAuth.signInWithPopup(proveedor);
      return { exito: true, usuario: credencialUsuario.user };
    } catch (error) {
      return { exito: false, mensaje: (error as Error).message };
    }
  }

  // Cerrar sesión
  async cerrarSesion() {
    await this.afAuth.signOut();
    this.router.navigate(['/inicio-sesion']);
  }
}
