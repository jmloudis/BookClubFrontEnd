import {Club} from "./club";

export class Book{
    author?:string;
    genre?:string;
    id!:bigint;
    imageUrl?:string;
    price!:number;
    title?:string;
    totalSales!:number;
    yearPublished!:number;
    clubs!: Club[];
}
