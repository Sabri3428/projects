import { Product } from "./product";

// product ile alakalı bir depo
export class ProductRepository{
    private products:Product[]=[
   
        {id:1,name:"iphone 14",price:20000,imageUrl:"1.jpeg",description:"iyi telefon",isActive:true},
        {id:2,name:"iphone 15",price:30000,imageUrl:"2.jpeg",description:"iyi telefon",isActive:true},
        {id:3,name:"iphone 16",price:30000,imageUrl:"3.jpeg",description:"iyi telefon",isActive:true}
      ];

      getProducts():Product[]{
        return this.products.filter(p=>p.isActive);
      }
  
      getProductById(id:number){
        return this.products.find(p=>p.id==id);
      }
}