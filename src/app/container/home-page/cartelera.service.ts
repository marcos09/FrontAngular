import { Injectable } from '@angular/core';

import {Http, Response, Headers, RequestOptions} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";


@Injectable()
export class CarteleraService {


  constructor() { }
  
  private http: Http;
  private carteleraService: CarteleraService;

  public obtenerCarteleras(): Observable<Response> {  	 
	 return this.http.get('localhost:8080/carteleras');
  //En este momento aún no se efectuó la llamada
}
	public getTexto(): String {
		return "Este es el texto proporcionado por el servicio";
	}


}
