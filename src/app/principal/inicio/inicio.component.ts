import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  donaciones = [
    {
      titulo: 'Donación de Pelo',
      descripcion: 'Contribuye a la creación de pelucas para pacientes oncológicos.',
      imagen: '../assets/donaciones/Donarpelo.jpg',
      link: '/donaciones/pelo',
      color: 'text-pink-500',
      botonColor: 'bg-pink-500 hover:bg-pink-600'
    },
    {
      titulo: 'Donación de Sangre',
      descripcion: 'Cada donación de sangre puede salvar hasta tres vidas.',
      imagen: 'assets/donaciones/sangre.jpg',
      link: '/donaciones/sangre',
      color: 'text-red-500',
      botonColor: 'bg-red-500 hover:bg-red-600'
    },
    {
      titulo: 'Donación de Juguetes',
      descripcion: 'Regala felicidad a niños en situación vulnerable.',
      imagen: 'assets/donaciones/juguetes.jpg',
      link: '/donaciones/juguetes',
      color: 'text-yellow-500',
      botonColor: 'bg-yellow-500 hover:bg-yellow-600'
    },
    {
      titulo: 'Donación de Libros',
      descripcion: 'Promueve la educación donando libros en buen estado.',
      imagen: 'assets/donaciones/libros.jpg',
      link: '/donaciones/libros',
      color: 'text-blue-500',
      botonColor: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      titulo: 'Donación de Dinero',
      descripcion: 'Contribuye económicamente a causas benéficas y proyectos solidarios.',
      imagen: 'assets/donaciones/dinero.jpg',
      link: '/donaciones/dinero',
      color: 'text-green-500',
      botonColor: 'bg-green-500 hover:bg-green-600'
    },
    {
      titulo: 'Dona tu Tiempo',
      descripcion: 'Ayuda como voluntario en distintas causas sociales.',
      imagen: 'assets/donaciones/tiempo.jpg',
      link: '/donaciones/tiempo',
      color: 'text-purple-500',
      botonColor: 'bg-purple-500 hover:bg-purple-600'
    }
  ];
}
