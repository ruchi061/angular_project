import { Component, HostListener, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./reusable/sidebar/sidebar.component";
import { NavBarComponent } from "./reusable/nav-bar/nav-bar.component";
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule,SidebarComponent, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'Disaster_preparedness';

  sidebarOpen = true;
  @ViewChild(NavBarComponent) navBar!: NavBarComponent;

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }


  checkScreenSize() {
    if (window.innerWidth <= 1000) {
      this.sidebarOpen = false;
      this.navBar.sidebarOpen = false;
    } else {
      this.sidebarOpen = true;
    }
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  onCloseSidebar() {
    this.navBar.sidebarOpen = false;
    this.sidebarOpen = false;
  }


}
