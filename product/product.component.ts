import { Component } from "@angular/core";
import { Product } from "./Product";

@Component({
    selector:'prod-comp',
    templateUrl:'./product.component.html',
    styleUrls:['./product.component.css']
})
export class ProductComponent{
    //Array of Product objects
    parr:Product[]=
    [
            new  Product(101,"Laptop",45000),
            new  Product(102,"ipod",500),
            new  Product(103,"handbag",450)
    ]

}