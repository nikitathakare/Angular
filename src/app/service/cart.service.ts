import { cartItemModule } from './../model/cartItem.module';
import { foodModule } from 'src/app/model/food.module';
import { cartModule } from './../model/cart.module';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems:cartItemModule=new cartItemModule();
  
  addTocart(food:foodModule):void{
    let cart = this.cartItems.items.find(item=>item.foodItem.id===food.id)
    if(cart){
      this.changeQuatity(food.id,cart.quantity+1)
      return;
    }
    else{
      this.cartItems.items.push(new cartModule(food))   
     }

  }
  changeQuatity(id: number, quantity: number) {
    
    let cartItem = this.cartItems.items.find(item=>
      item.foodItem.id===id)
      if(!cartItem) return;
      cartItem.quantity=quantity;
      
  }

  getCart() : cartItemModule{
    return this.cartItems;
  }




}
