import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "donacionesapp-33813", appId: "1:294639081259:web:c80606b17436dc805d576e", storageBucket: "donacionesapp-33813.firebasestorage.app", apiKey: "AIzaSyD-yAo0SnXifxkzwpvuzSqXTQzSg7FqMJY", authDomain: "donacionesapp-33813.firebaseapp.com", messagingSenderId: "294639081259", measurementId: "G-ZHL5E8C34R" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
