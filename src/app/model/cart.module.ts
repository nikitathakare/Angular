import { foodModule } from 'src/app/model/food.module';
export class cartModule{
    constructor(food:foodModule){
        this.foodItem=food;
    }
   // OrderId : number;
    quantity: number =1;
    foodItem: foodModule;
    get price():number{
        return this.foodItem.price*this.quantity;
      }


}