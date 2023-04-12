export class Pet {
    id: number;
    namePet: string;
    edad: number;
    peso:number;
    color:string;
    constructor(id:number, namePet: string, edad: number, peso : number, color: string)
    {
        this.id = id;
        this.namePet = namePet;
        this.edad = edad;
        this.peso = peso;
        this.color = color;
    }

}