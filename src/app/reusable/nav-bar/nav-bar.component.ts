import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import {MatBadgeModule} from '@angular/material/badge';
import { AlertService } from '../../services/alert.service';
import { AlertsComponent } from '../../components/alerts/alerts.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatDividerModule,
    MatInputModule,
    FormsModule,
    MatSidenavModule,
    RouterLink,
    MatBadgeModule
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {

  @Input() isOpen = false;
  @Output() closeSidebar = new EventEmitter<void>();
  @Output() searchEvent = new EventEmitter<string>();
  length !: number


  showSearch: boolean = true;

  constructor(private alertService : AlertService, private router: Router, private activatedRoute: ActivatedRoute) {

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {

        let currentRoute = this.activatedRoute;
        while (currentRoute.firstChild) {
          currentRoute = currentRoute.firstChild;
        }
        this.showSearch = !currentRoute.snapshot.data['hideSearch'];
      });
  }


  ngOnInit(){
    this.alertService.subject.subscribe({
      next : (data)=> {
        console.log("NavBar", data)
        this.length = data
      },
      error : (err) => {
        console.error(err)
      }
    })
  }



  searchQuery: string = '';
  sidebarOpen = true;

  onSearch() {
    this.searchEvent.emit(this.searchQuery);
  }

  toggleSidebar() {
    this.sidebarOpen = true;
    this.closeSidebar.emit();
  }
}
