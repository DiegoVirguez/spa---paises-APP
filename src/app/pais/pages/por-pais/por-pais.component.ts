import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent {

 termino:string = '';
 hayError: boolean = false;
 paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar( terminoEvento: string){
    this.hayError = false;
    this.termino = terminoEvento;
    console.log(this.termino);
    
    this.paisService.buscarPais(this.termino)
    .subscribe({
      next: (paises) => {
        console.log('DATA::',paises)
        this.paises = paises;
      },
      error: (_) => {
        this.hayError = true;
        this.paises = [];
      }
    });
  }

}
