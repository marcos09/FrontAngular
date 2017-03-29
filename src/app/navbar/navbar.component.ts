import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	
	    opciones: string[] = [
    "Opción 1 del navbar",
    "Opción 2 del navbar",
    "Opción 3 del navbar",
    "Opción 4 del navbar",

    ];


  constructor() { }

  ngOnInit() {

  }

}
