import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { foodModule } from '../model/food.module';
import { FoodService } from '../service/food/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 // [x: string]: any;
food: foodModule[]=[];
  constructor(private foodservice:FoodService ,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(params=>{
      if(params['searchItem']){
        this.food=this.foodservice.getAllImages().filter(food=>food.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      }
      else{
        this.food=this.foodservice.getAllImages();
      }
    })
   
  }

}
