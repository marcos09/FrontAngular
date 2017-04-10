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
  }
}
