export class Product{
    code:number;
    name:string;
    price:number;

    constructor(pid:number,pname:string,pr:number){
        this.code=pid;
        this.name=pname;
        this.price=pr;
    }
}