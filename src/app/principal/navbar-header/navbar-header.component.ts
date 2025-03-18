import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar-header.component.html',
  styleUrls: ['./navbar-header.component.scss']
})
export class NavbarHeaderComponent {
  menuAbierto = false;

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }
  previousScrollPosition = 0;
  isHeaderVisible = true;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollPosition > this.previousScrollPosition) {
      // Desaparece el header al hacer scroll hacia abajo
      this.isHeaderVisible = false;
    } else {
      // Aparece el header al hacer scroll hacia arriba
      this.isHeaderVisible = true;
    }

    this.previousScrollPosition = currentScrollPosition;
  }
}
