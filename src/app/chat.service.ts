import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  @Output() showContact = new EventEmitter();
  @Output() envioMensaje = new EventEmitter();
  @Output() verificar = new EventEmitter();
  @Output() confirmar = new EventEmitter();

  constructor() { }
}
