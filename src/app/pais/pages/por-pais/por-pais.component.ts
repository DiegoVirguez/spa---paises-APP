import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent {

 termino:string = '';

  constructor(private paisService: PaisService) { }

  buscar(){
    this.paisService.buscarPais(this.termino)
    .subscribe( resp =>{         //debo colocar subscribe para que se dispare la peticion
      console.log(resp);
    } );
    console.log(this.termino);
  }

}
