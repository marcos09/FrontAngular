import { Component, OnInit, Input } from '@angular/core';
import {Cartelera} from '../../../model/cartelera';

@Component({
  selector: 'app-carrousel-black',
  templateUrl: './carrousel-black.component.html',
  styleUrls: ['./carrousel-black.component.css']
})
export class CarrouselBlackComponent implements OnInit {

 @Input('cartelera') cartelera: Cartelera;

  constructor() { }

  ngOnInit() {
  }

}
