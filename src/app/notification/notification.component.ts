import { Component, OnInit } from '@angular/core';
import { LocalNotifications } from '@capacitor/local-notifications';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  async triggerNotification() {
    // Solicita permissão para enviar notificações locais
    const hasPermission = await LocalNotifications.requestPermissions();
    
    if (hasPermission.display === 'granted') {
      // Disparar uma notificação local
      await LocalNotifications.schedule({
        notifications: [
          {
            title: "Alerta",
            body: "Esta é uma notificação local de teste.",
            id: 1,
            schedule: { at: new Date(new Date().getTime() + 1000) }, // Agendado para 1 segundo a partir de agora
            actionTypeId: "",
            extra: null
          }
        ]
      });
    } else {
      console.error("Permissão negada para notificações.");
    }
  }
}
