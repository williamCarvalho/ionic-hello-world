import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeoLocationComponent } from './geo-location.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [GeoLocationComponent],
  imports: [CommonModule, IonicModule],
  exports: [GeoLocationComponent]
})
export class GeoLocationModule { }
