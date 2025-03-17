import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  // Iniciar sesión con correo y contraseña
  login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  // Registrarse con correo y contraseña
  register(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  // Iniciar sesión con Google
  loginWithGoogle() {
    return this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  // Iniciar sesión con Twitter
  loginWithTwitter() {
    return this.afAuth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
  }

  // Iniciar sesión con Microsoft
  loginWithMicrosoft() {
    return this.afAuth.signInWithPopup(new firebase.auth.OAuthProvider('microsoft.com'));
  }

  // Iniciar sesión con teléfono
  loginWithPhone(phoneNumber: string, appVerifier: firebase.auth.RecaptchaVerifier) {
    return this.afAuth.signInWithPhoneNumber(phoneNumber, appVerifier);
  }

  // Cerrar sesión
  logout() {
    return this.afAuth.signOut();
  }
}
