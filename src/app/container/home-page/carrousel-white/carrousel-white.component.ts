import { Component, OnInit, Input } from '@angular/core';
import {Cartelera} from '../../../model/cartelera';

@Component({
  selector: 'app-carrousel-white',
  templateUrl: './carrousel-white.component.html',
  styleUrls: ['./carrousel-white.component.css']
})
export class CarrouselWhiteComponent implements OnInit {

 @Input('cartelera') cartelera: Cartelera;

  constructor() { }

  ngOnInit() {
  }

}
