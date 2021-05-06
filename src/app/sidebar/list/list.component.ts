import { getLocaleDateTimeFormat } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/chat.service';
import { Contact } from './Icontact';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})



export class ListComponent implements OnInit {
  hoy = new Date();

/*   contactTest: Contact = {
    name : 'Carlos' ,
    photo: '',
    lastMessage: '',
    lastDate: new Date()
  }; */

  list: any = [];

  /* listado = [];
    // tslint:disable-next-line: typedef
  for(item: any,  of: any, res: object) {
    this.listado.item.name
  } */
  // fecha = new Date(); para obtener la fecha actual se usa así

  constructor(private service: ChatService, private http: HttpClient) { }

  show(contact: any): void{
    this.service.showContact.emit(contact);
    this.service.verificar.subscribe(
      this.service.confirmar.emit(contact));
  }

  checkToday(lastDate: Date): boolean{
    return this.hoy.getDate() === lastDate.getDate() &&
    this.hoy.getMonth() === lastDate.getMonth() &&
    this.hoy.getFullYear() === lastDate.getFullYear();
  }

  checkYesterday(lastDate: Date): boolean{
    return (this.hoy.getDate() - 1) === lastDate.getDate() &&
    this.hoy.getMonth() === lastDate.getMonth() &&
    this.hoy.getFullYear() === lastDate.getFullYear();
  }

  checkOther(lastDate: Date): boolean{
    return ((this.hoy.getDate() - 2) === lastDate.getDate() ||
    (this.hoy.getDate()) <= lastDate.getDate()) &&
    (this.hoy.getMonth() >= lastDate.getMonth() ||
    this.hoy.getMonth() <= lastDate.getMonth()) &&
    this.hoy.getFullYear() >= lastDate.getFullYear();
  }

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(res => {
      for (const i  of Object.values(res)) {
        i.mensajes = [];
      }
      this.list = res;
    });
  }
// Get es para obtener
// Put es para actualizar toda la información
// Patch es para actualizar un dato de la información
// Delete es para eliminar
}
