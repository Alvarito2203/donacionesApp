import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { NavbarHeaderComponent } from './principal/navbar-header/navbar-header.component';
import { FooterComponent } from './principal/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,NavbarHeaderComponent, FooterComponent],
  template: `
    <app-navbar-header></app-navbar-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>

  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent { }
