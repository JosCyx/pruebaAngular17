import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  private cambioSubject = new Subject<void>();
  private cambioSubject2 = new Subject<void>();

  cambio$ = this.cambioSubject.asObservable();
  cambio2$ = this.cambioSubject2.asObservable();
  constructor() { 
    console.log("Carga del servicio compartido...")
  }

  //un metodo por cada componente que quiera emitir un cambio
  emitirCambio() {
    this.cambioSubject.next();
    console.log("Cambio emitido");
  }

  emitirCambio2() {
    this.cambioSubject2.next();
  }
}
