import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DisasterService } from '../../services/disaster.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';
import * as DisasterActions from '../../store/actions/disaster.action';
import { Observable, Subscription } from 'rxjs';
import { selectDisasters } from '../../store/selectors/disaster.selector';

@Component({
  selector: 'app-dashboard',
  standalone: true,
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
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  // disasters: any[] = [];
  // filteredDisasters: any[] = [];
  disasters$?: Observable<any[]>;
  filteredDisasters$?: Observable<any[]>;
  disasters: any[] = [];
  searchQuery: string = '';

  private bucketSubscription!: Subscription;

  // @ViewChild(NavBarComponent) navBar!: NavBarComponent;

  constructor(
    private disasterServ: DisasterService,
    private store: Store<{disasters:any[]}>,
    private router: Router
  ) {}


  ngOnInit(): void {
    this.disasterServ.getData().subscribe((res) => {
      const disasters = Array.isArray(res[0].disasters)
        ? res[0].disasters
        : Object.values(res[0].disasters);
      this.store.dispatch(DisasterActions.loadDisastersSuccess({ disasters }));

      this.filteredDisasters$ = this.store.select(selectDisasters);
    });
  }

  // onSearch(field:string) {
  //   this.searchQuery = field;
  //   const query = this.searchQuery.toLowerCase();
  //   this.filteredDisasters = this.disasters.filter(disaster =>
  //     disaster.category.toLowerCase().includes(query)
  //   );

  // }

  selectedDisaster(disasterName: string) {
    this.router.navigate(['disaster/', disasterName]);
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  logout() {}
}
