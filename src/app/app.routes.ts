import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GuidelinesComponent } from './components/guidelines/guidelines.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ResourceShelterListComponent } from './components/resource-shelter-list/resource-shelter-list.component';
import { CommunityChatComponent } from './components/community-chat/community-chat.component';
import { AddGuidelinesComponent } from './components/add-guidelines/add-guidelines.component';
import { RequestComponent } from './components/request/request.component';
import { AlertsComponent } from './components/alerts/alerts.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'disaster/:disasterName',
    component: GuidelinesComponent,
    data: { hideSearch: true }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { hideSearch: true }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: { hideSearch: true }
  },
  {
    path: 'resource-shelter',
    component: ResourceShelterListComponent,
    data: { hideSearch: true }
  },
  {
    path: 'community',
    component: CommunityChatComponent,
    data: { hideSearch: true }
  },
  {
    path: 'add-guidelines',
    component: AddGuidelinesComponent
  },
  {
    path: 'request',
    component: RequestComponent
  },
  {
    path:'alerts',
    component:AlertsComponent
  }
];
