import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/chat.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  constructor(private service: ChatService) { }

  name: any = {};

  ngOnInit(): void {
    this.service.showContact.subscribe(val => {
      this.name = val;
    });

    this.service.envioMensaje.subscribe(mss => {
        this.name.mensajes.push(mss);
    });
  }
}
