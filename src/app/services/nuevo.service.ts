import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class NuevoService {
  apiUrl!: string;

  constructor( private golbalService: GlobalService) {
    console.log("Carga del servicio nuevo...")
    
    this.golbalService.getConfigLoadedObservable().subscribe(
      (configLoaded) => {
        if (configLoaded) {
          this.apiUrl = this.golbalService.getApiUrl();
          console.log("Url impresa:",this.apiUrl);
          // Ahora puedes usar apiUrl de manera segura.
        }
      });
   }

}
