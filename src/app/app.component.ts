import { Component } from '@angular/core';
import { SharedServiceService } from './services/shared-service.service';

import { GlobalService } from './services/global.service';
import { NuevoService } from './services/nuevo.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pruebAngular';

  // @ViewChild(CmpFirstComponent) cmpFirst! : CmpFirstComponent;
  // @ViewChild(CmpSecndComponent) cmpSecond! : CmpSecndComponent;

  constructor(private sharedService: SharedServiceService,private globalService: GlobalService, private nuevo: NuevoService) {
   
  }

  metodo1(){
    this.sharedService.emitirCambio();
  }

  metodo2(){
    this.sharedService.emitirCambio2();
  }
}
