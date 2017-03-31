import { Component } from '@angular/core';
import {Http} from "@angular/http";

//import {CarteleraService} from './cartelera.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers:[CarteleraService, Http]
})
export class AppComponent {
  title = 'Bienvenido a la cartelera';
  name ='Este es el nombre de mi aplicacion';
  template = 'home';
  navbar = 'notLogin';
  user: User = {name: 'Marcos', id:1, isLogin:false};


  constructor(){
    //Ver bien esto
  }
}
export class Cartelera {
    name: string;
    description: string;
}
export class User {

  id: number;
  name: string;
  isLogin: boolean;

}
 
//Podríamos crear un arreglo de carteleras, publicaciones o lo que fuere.