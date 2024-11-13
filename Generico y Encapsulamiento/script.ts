class Sorteo<T>{
    private numero?: T;
    
    constructor(private nombre: string){
    }

    setNumbero(numero:T){
        this.numero = numero
    }
    getNumero(){
        return this.numero
    }

    public sortear(): string{
        return `Para ${this.nombre} el ticket es ${this.numero}` 
    }
}

let sorteo = new Sorteo<number>("Juan")
sorteo.setNumbero(12548)
console.log(sorteo.sortear());
