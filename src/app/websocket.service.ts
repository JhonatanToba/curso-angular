import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  contenedor: WebSocket;

  constructor() {
    this.contenedor = new WebSocket('wss://webskocet.herokuapp.com');
  }

  // Emisor (Envio de mensajes)
  sendMensaje(msg: string): void {
    this.contenedor.send(msg);
  }

  // Handler (Receptor de mensajes)

  nuevoMensaje(): Observable<any> {
    return new Observable(observer => {
      this.contenedor.onmessage = (msg => {
        observer.next(msg);
      });
    });
  }
}
