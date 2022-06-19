import { cartModule } from './../model/cart.module';
import { CartService } from './../service/cart.service';
import { FoodService } from './../service/food/food.service';
import { cartItemModule } from './../model/cartItem.module';
import { foodModule } from 'src/app/model/food.module';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
    cartItems:cartItemModule;
  constructor(private CartServices:CartService) {
    this.setCart();
   }

  ngOnInit(): void {


  }
  setCart(){
    this.cartItems=this.CartServices.getCart();
  }
  onChange(cart:cartModule,quantity:string){
    const quan = parseInt(quantity);
    this.CartServices.changeQuatity(cart.foodItem.id,quan);
    this.setCart();

    }
  }


