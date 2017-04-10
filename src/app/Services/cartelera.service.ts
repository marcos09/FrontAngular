import { Injectable } from '@angular/core';

import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Cartelera} 	from '../model/cartelera';
import {Observable} from 'rxjs/Rx';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class CarteleraService {

   	headers;
   	options;


	constructor(private http: Http) {
      
      //this.headers = new Headers({ 'Access-Control-Allow-Origin' :'*' });
      //this.options = new RequestOptions({ headers: this.headers });


   }
	public obtenerCarteleras(): Observable<Cartelera[]> {  	 
  		return this.http.get("http:\/\/localhost:8080/CarteleraVirtual/carteleras").map((res:Response) => res.json());

	}

	public getTexto(): string {
		return "Este es el texto proporcionado por el servicio";
	}


}

