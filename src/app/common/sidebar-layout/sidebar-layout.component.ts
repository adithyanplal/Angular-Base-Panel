import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-sidebar-layout',
  standalone: true,
  imports: [CommonModule,RouterOutlet,SidebarComponent,HeaderComponent,FooterComponent],
  templateUrl: './sidebar-layout.component.html',
  styleUrl: './sidebar-layout.component.css'
})
export class SidebarLayoutComponent {
  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
