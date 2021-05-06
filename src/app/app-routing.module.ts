import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutaDosComponent } from './ruta-dos/ruta-dos.component';
import { RutaTresComponent } from './ruta-tres/ruta-tres.component';
import { RutaUnoComponent } from './ruta-uno/ruta-uno.component';

const routes: Routes = [
  {
    path: 'ruta-uno', // El path lo usamos para saber como queremos que se escriba la URL para que se vea
    component: RutaUnoComponent, // El componente que queremos que se vea en el explorador
    children: [
      {
        path: 'ruta-dos',
        component: RutaDosComponent
      }
    ]
  },
  {
    path: 'ruta-tres',
    component: RutaTresComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
