import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LocationService {
  private userLocation: { latitude: number; longitude: number } | null = null;
  private address: any = null;

  constructor(private http: HttpClient) {
    this.getCurrentLocation();
  }

  getLocation(): { latitude: number; longitude: number } | null {
    return this.userLocation;
  }

  getAddress(): any {
    return this.address;
  }


  getCurrentLocation(): Promise<{ city: string }> {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          const city = await this.getCityFromCoordinates(lat, lon);

          resolve({ city });
        }, (error) => {
          reject(error);
        });
      } else {
        reject('Geolocation is not supported');
      }
    });
  }
  private async getCityFromCoordinates(lat: number, lon: number): Promise<string> {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;

    try {
      const data: any = await firstValueFrom(this.http.get(url));
      console.log('Full Response:', data);

      const address = {
        // street: data.address?.road || data.address?.suburb || '',
        district: data.address?.state_district || '',
        state: data.address?.state || '',
        // country: data.address?.country || ''
      };
      console.log('Fetched Address:', address);

      return address.district || address.state;
    } catch (error) {
      console.error('Error fetching address:', error);
      throw new Error('Could not fetch location data');
    }
  }
}
