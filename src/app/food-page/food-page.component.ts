import { CartService } from './../service/cart.service';
import { FoodService } from './../service/food/food.service';
import { ActivatedRoute, Router } from '@angular/router';
import { foodModule } from 'src/app/model/food.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
  foods: foodModule;
  food:foodModule[];
  constructor(private activateRouter: ActivatedRoute, private foodServices:FoodService, private cartservice:CartService,
    private router:Router) {
    this.activateRouter.params.subscribe(params=>{
      if(params['id'])
      this.foods=foodServices.getfoodById(params['id']);
    })
   }


  ngOnInit(): void {
    
      
  }
  addtocart(){
    this.cartservice.addTocart(this.foods);
    this.router.navigateByUrl('/cart') //will route with the food info to next cart page

  }

}
