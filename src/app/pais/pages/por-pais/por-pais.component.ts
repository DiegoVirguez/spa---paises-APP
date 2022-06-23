import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent {

 termino:string = '';
 hayError: boolean = false;

  constructor(private paisService: PaisService) { }

  buscar(){
    this.hayError = false;
    
    this.paisService.buscarPais(this.termino)
    .subscribe({
      next: (data) => console.log('DATA::',data),
      error: (_) => this.hayError = true
    });
  }

}
