import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bienvenido a la cartelera';
  nombre ='Este es el nombre de mi aplicacion';
  lista = [
  	{nombre: 'Leche', check: false},
  	{nombre: 'Pan', check: false},
  	{nombre: 'Huevos', check: true},


  ];
  agregarProducto(){
  	lista.push("Se agregó un producto");
  }
}
