import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/chat.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  constructor(private service: ChatService) { }

  mensaje: string[] = [];
  name: any = [];
  persona = '';
  nombre: boolean | undefined ;
  historial!: '';

  ngOnInit(): void {
    this.service.envioMensaje.subscribe(val => {
      this.mensaje.push(val);
      console.log(this.mensaje);
    });

    this.service.confirmar.subscribe(contacto => {
      this.nombre = this.name.find((item: any) => item === contacto.name);
      this.persona = contacto.name;
      console.log(this.mensaje);
      if (this.nombre === contacto.name) {
        this.historial = this.name.indexOf(contacto.name);
        /* this.name[contacto.name + 1] = this.mensaje; */
        this.name[this.historial + 1] = this.mensaje;
        this.mensaje = this.name[this.historial + 1];
        
      } else {
        this.name.push(contacto.name, contacto.mensaje);
        this.historial = this.name.indexOf(contacto.name);
        this.mensaje = [];
      }
    });
  }
}
