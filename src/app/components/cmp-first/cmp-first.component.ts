import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-cmp-first',
  templateUrl: './cmp-first.component.html',
  styleUrls: ['./cmp-first.component.css']
})
export class CmpFirstComponent implements OnInit{
  valor!:boolean;

  constructor(private sharedService: SharedServiceService) { }


  ngOnInit() {
    this.sharedService.cambio$.subscribe(() => {
      // Lógica que se ejecutará cuando se emita un cambio
      this.cambio();
    });
  }

  cambio(){
    if(this.valor == undefined){
      this.valor = true;
    }else{
      this.valor = !this.valor;
    }
  }
}
