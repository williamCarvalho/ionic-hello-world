import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss'],
})
export class CameraComponent  implements OnInit {

  errorMessage: string | null = null;

  constructor() { }

  ngOnInit() {}

  capturedImage: string | undefined;

  async takePicture() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Base64, // Pode ser URI, Base64 ou DataUrl
        source: CameraSource.Camera, // Pode ser Camera, Photos ou Prompt
      });
    
      // image.webPath will contain a path that can be set as an image src.
      // You can access the original file using image.path, which can be
      // passed to the Filesystem API to read the raw data of the image,
      // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
      var imageUrl = image.webPath;
    
      // Can be set to the src of an image now
      // imageElement.src = imageUrl;
      console.log(imageUrl);
      this.capturedImage = `data:image/jpeg;base64,${image.base64String}`;
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === 'PermissionDeniedError') {
          this.errorMessage = 'Permissão negada para acessar a câmera.';
          // Adicione lógica para solicitar permissão ou informar ao usuário
        } else if (error.message.includes('Camera')) {
          this.errorMessage = 'Erro ao acessar a câmera:' + error.message;
          // Trate erros específicos da câmera
        } else {
          this.errorMessage = 'Erro desconhecido:' + error.message;
          // Trate outros tipos de erros
        }
      } else {
        this.errorMessage = 'Erro desconhecido ao tentar acessar câmera.';
      }
    }
  };
}
