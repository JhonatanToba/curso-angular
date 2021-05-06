import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ChatComponent } from './chat/chat.component';
import { ListComponent } from './sidebar/list/list.component';
import { PersonaComponent } from './chat/persona/persona.component';
import { PrincipalComponent } from './chat/principal/principal.component';
import { EscribirComponent } from './chat/escribir/escribir.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RutaUnoComponent } from './ruta-uno/ruta-uno.component';
import { RutaDosComponent } from './ruta-dos/ruta-dos.component';
import { RutaTresComponent } from './ruta-tres/ruta-tres.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ChatComponent,
    ListComponent,
    PersonaComponent,
    PrincipalComponent,
    EscribirComponent,
    RutaUnoComponent,
    RutaDosComponent,
    RutaTresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

// Para generar formularios es necesario generar el Import de FormsModule que es de '@angular/forms'
export class AppModule { }
