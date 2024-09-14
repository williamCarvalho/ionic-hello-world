import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CameraComponent } from './camera.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [CameraComponent],
  imports: [CommonModule, IonicModule],
  exports: [CameraComponent]
})
export class CameraModule { }
