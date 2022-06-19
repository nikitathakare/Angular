import { cartModule } from "./cart.module";

export class cartItemModule{
    items:cartModule[]=[];

    get TotalPrice():number{
        let total =0;
        this.items.forEach(item => {
            total+=item.price;
            
        });
        return total;
    }


}