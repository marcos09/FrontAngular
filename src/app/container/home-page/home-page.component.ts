import { Component, OnInit } from '@angular/core';
import {CarteleraService} from './cartelera.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers:[CarteleraService],

})
export class HomePageComponent {
    
  
  pepe = 'Texto de prueba variable pepe';
  datos = 'Texto original';


  constructor(private _carteleraService: CarteleraService) { }      

 
  	ngOnInit() {
      //this._carteleraService.obtenerCarteleras.subscribe(res => { this.datos = res.json();});
      //this.datos = this._carteleraService.getTexto();
          
    }


}
