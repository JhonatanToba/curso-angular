import { AfterViewInit, Component } from '@angular/core';
import { fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'chat';

  ngAfterViewInit(): void {

  }
}
// El selector se usa para llamar la etiqueta HTML con el nombre que se le coloque
//
// Style
