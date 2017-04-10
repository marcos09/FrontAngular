import { Injectable } from '@angular/core';

import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Cartelera} 	from '../model/cartelera';
import {Observable} from 'rxjs/Rx';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class CarteleraService {


  constructor(private http: Http) { }

	public obtenerCarteleras(): Observable<Cartelera[]> {  	 
	 	console.log("Estoy en el servicio por hacer el get");
  		return this.http.get("../../localhost:8080/CarteleraVirtual/carteleras").map((res:Response) => res.json());

	}

	public getTexto(): string {
		return "Este es el texto proporcionado por el servicio";
	}


}

