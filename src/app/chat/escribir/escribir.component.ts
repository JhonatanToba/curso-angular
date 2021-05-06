import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ChatService } from 'src/app/chat.service';

@Component({
  selector: 'app-escribir',
  templateUrl: './escribir.component.html',
  styleUrls: ['./escribir.component.scss']
})

export class EscribirComponent implements OnInit {

    mensaje = new FormControl ('');


  constructor(private service: ChatService) { }

  ngOnInit(): void {
    this.mensaje.valueChanges.subscribe(val => {
    });
  }

  enviar(): void{
    this.service.envioMensaje.emit(this.mensaje.value);
    this.service.verificar.emit();
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
