import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Location {
  street: string;
  district: string;
  state: string;
  country: string;
}

export interface Resource {
  id?: number;
  name: string;
  type: string;
  quantity: number;
  location: Location;
  updatedAt: string;
}

export interface Shelter {
  id?: number;
  name: string;
  capacity: number;
  availableBeds: number;
  location: Location;
  updatedAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class DisasterService {

  constructor(private http: HttpClient) {}
  url: string = '../../assets/guidelines.json';

  apiUrl = '../../assets/db.json';

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  getResources(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getShelters(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
