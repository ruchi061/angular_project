import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private alerts = [
    { city: 'Ahmedabad', category:"Heavy Rainfall", message: 'Heavy Rainfall Expected Tomorrow' },
    { city: 'Ahmedabad', category:"EarthQuake", message: 'EarthQuake alert' },
    { city: 'Mumbai', category:"Cyclone", message: 'Cyclone Alert in Coastal Areas' },
    { city: 'Delhi', category:"High Pollution", message: 'High Pollution Levels Detected' },
    { city: 'Surat', category:"Flood", message: 'Flood possibility is high in surat' },
    { city: 'Surat', category:"Tornado", message: 'Tornado possibility' }
  ];

  subject = new Subject<number>()
  length:number=0
  filteredAlerts:any[]=[];
  constructor() {
    this.getLength()
  }

  getAlertsForCity(city: string) {
    this. filteredAlerts = this.alerts.filter(alert => alert.city === city)
    return this.filteredAlerts;
  }

  getLength(){
    this.length= this.filteredAlerts.length;
    this.subject.next(this.length);
  }
}
