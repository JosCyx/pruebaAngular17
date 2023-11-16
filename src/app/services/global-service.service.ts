import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {

  constructor() {
    console.log("Carga del servicio global...")
   }
}
