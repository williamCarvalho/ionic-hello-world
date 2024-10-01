import { Component } from '@angular/core';
import { PushNotifications } from '@capacitor/push-notifications';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    this.initPushNotifications();
  }

  initPushNotifications() {
    // Solicitar permissão para enviar notificações
    PushNotifications.requestPermissions().then(permission => {
      if (permission.receive === 'granted') {
        // Registrar o dispositivo para receber notificações
        PushNotifications.register();
      }
    });

    // Listener quando o dispositivo é registrado com sucesso
    PushNotifications.addListener('registration', token => {
      console.log('Token de registro: ', token.value);
      // Aqui você pode enviar o token para o seu servidor ou Firebase
    });

    // Listener para quando houver erro no registro
    PushNotifications.addListener('registrationError', error => {
      console.error('Erro de registro: ', error);
    });

    // Listener para quando uma notificação é recebida
    PushNotifications.addListener('pushNotificationReceived', notification => {
      console.log('Notificação recebida: ', notification);
      // Aqui você pode lidar com a notificação
    });

    // Listener para quando o usuário clica na notificação
    PushNotifications.addListener('pushNotificationActionPerformed', notification => {
      console.log('Ação da notificação: ', notification);
      // Aqui você pode executar a ação da notificação
    });
  }
}
