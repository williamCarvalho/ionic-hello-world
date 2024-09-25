import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-geo-location',
  templateUrl: './geo-location.component.html',
  styleUrls: ['./geo-location.component.scss'],
})
export class GeoLocationComponent  implements OnInit {

  currentLocation: { latitude: number; longitude: number } | undefined;
  errorMessage: string | null = null;

  constructor() { }

  ngOnInit() {}

  async getLocation() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();

      this.currentLocation = {
        latitude: coordinates.coords.latitude,
        longitude: coordinates.coords.longitude,
      };
    } catch (error) {
      if (error instanceof Error) {
        this.errorMessage = 'Erro ao obter localização: ' + error.message;
      } else {
        this.errorMessage = 'Erro desconhecido ao obter localização.';
      }
    }
  }

}
