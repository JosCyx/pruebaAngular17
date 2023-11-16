import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
 

  private apiUrl!: string;
  private configLoaded$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private http: HttpClient) {
    console.log("Carga del servicio global...")
    
    this.loadConfig();
   }

  loadConfig() {
    this.http.get('../assets/config.json').toPromise()
      .then((data: any) => {
        this.apiUrl = data.APIUrl; // Accede a la propiedad "APIUrl" en el JSON.
        this.configLoaded$.next(true);
      })
      .catch(error => {
        console.error('Error loading configuration:', error);
      });
  }

  getConfigLoadedObservable(): Observable<boolean> {
    return this.configLoaded$.asObservable();
  }

  getApiUrl(): string {
    return this.apiUrl;
  }

}
