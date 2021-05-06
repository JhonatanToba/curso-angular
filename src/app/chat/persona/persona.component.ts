import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/chat.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {

  photo = '';
  name = '';

  constructor(private service: ChatService) { }

  ngOnInit(): void {
    this.service.showContact.subscribe(val => {
      this.name = val.name;
      this.photo = val.photo;
    });
  }
}
