import {Publicacion} from './publicacion' ;

export class Cartelera {
	constructor(
        public id: number, 
        public nombreCartelera: string,
        public descripcion:string,
        public author: string, 
        public text:string,
        public padre: number,
        public publicaciones: Publicacion[],
        public carteleras: Cartelera[],
        ){}
}
