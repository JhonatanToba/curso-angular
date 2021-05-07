import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ChatService } from 'src/app/chat.service';
import { WebsocketService } from 'src/app/websocket.service';

@Component({
  selector: 'app-escribir',
  templateUrl: './escribir.component.html',
  styleUrls: ['./escribir.component.scss']
})

export class EscribirComponent implements OnInit {

    mensaje = new FormControl ('');
    nuevoMensaje: any = {};

  constructor(private service: ChatService, private websocket: WebsocketService) { }

  ngOnInit(): void {
    /*this.mensaje.valueChanges.subscribe(val => {
    }); */

    this.websocket.nuevoMensaje().subscribe(val => {
      this.nuevoMensaje = val;
      console.log(this.nuevoMensaje);
      this.service.envioMensaje.emit(this.nuevoMensaje.data);
    });
  }

  enviar(): void{
    this.websocket.sendMensaje(this.mensaje.value);
    this.service.envioMensaje.emit(this.mensaje.value);
    // this.mensaje = new FormControl ('');
    // this.mensaje.setValue('');
    this.mensaje.reset();
  }

  enviarEnter(ev: KeyboardEvent): void{
    if (ev.key === 'Enter'){
      this.enviar();
    }
  }
 
}
