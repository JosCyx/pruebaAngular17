import { Component, OnInit} from '@angular/core';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-cmp-secnd',
  templateUrl: './cmp-secnd.component.html',
  styleUrls: ['./cmp-secnd.component.css']
})
export class CmpSecndComponent implements OnInit{
  valor!:boolean;

  constructor(private sharedService: SharedServiceService) { }


  ngOnInit() {
    this.sharedService.cambio2$.subscribe(() => {
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
