export class Publicacion {
	constructor(
        public id: number, 
        public titulo: string,
        public descripcion:string,
        public author: string, 
        public comentarios:bool,
        public cartelera: Cartelera,
        public estado: string,
    ){}
}