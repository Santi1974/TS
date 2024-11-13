class Pelicula{
    titulo?: string;
    director?: string;
    actores?: string[];
    presupuesto?: number;

    constructor(titulo: string, director: string, actores: string[], presupuesto: number){
        this.titulo = titulo;
        this.director = director;
        this.actores = actores;
        this.presupuesto = presupuesto;
    }

    public getReparto(){
        let retorno:String = `La pelicula ${this.titulo}, dirijida por ${this.director} es actuada por `;
        console.log(this.actores?.length);
        
        this.actores!.forEach(actor => {
            retorno += actor;
            if(this.actores!.indexOf(actor)+1 == this.actores?.length){
                retorno += `.`
            }else{
                retorno += `, `
            }
        });
        console.log(retorno);
        
    }
}

let terror = new Pelicula("Blade Runner 2049", "Denis Villenenue", ["Ryan Gosling", "Harrison Ford"], 1850000);

terror.getReparto();