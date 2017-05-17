import { Component, OnInit } from '@angular/core';
import {CarteleraService} from '../../Services/cartelera.service';
import {Cartelera} from '../../model/cartelera';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers:[CarteleraService],

})
export class HomePageComponent {

  carteleras: Cartelera[];
  texto: string;

  carrousel = new Boolean(false);

  constructor(private _carteleraService: CarteleraService) {

  }      
  ngOnInit(){
    this._carteleraService.obtenerCarteleras().subscribe(carteleras => this.carteleras = carteleras);
    /*carteleras.forEach(function(value){
      this._carteleraService.obtenerPublicacionesCarteleras(value.id).subscribe(carteleras => this.carteleras = carteleras);      
    }
      
      );*/
  }
} 
