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
  constructor(private _carteleraService: CarteleraService) {
    console.log("Estoy en el constructor del HomePageComponent");
  }      
  ngOnInit(){
    console.log("Estoy en el OnInit de HomePageComponent");
    this._carteleraService.obtenerCarteleras().subscribe(        carteleras => this.carteleras = carteleras);
    console.log("Terminé supuestamente el pedido http");
    

  }
} 
