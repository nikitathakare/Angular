import { Injectable } from '@angular/core';
import { foodModule } from 'src/app/model/food.module';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
 // foods:foodModule[];
  constructor() { }

  foods:foodModule[]=[
    {id:1,
      name:'Pizza',
      description:'hjklkjhvcv',
      imageURL:'https://media.istockphoto.com/photos/hawaiian-pizza-with-ham-and-pineapple-picture-id1349383878?b=1&k=20&m=1349383878&s=170667a&w=0&h=3AbAQ2fZXl0BYLr11F_E8C_OxM_-VP9ZIFJ8n185sVg=',
      price:100},
      {id:2,
        name:'Burger',
        description:'hjklkjhvcv',
        imageURL:'https://media.istockphoto.com/photos/cheeseburger-with-tomato-and-lettuce-on-wooden-board-picture-id1309352410?b=1&k=20&m=1309352410&s=170667a&w=0&h=YduYl7Us5MSrw1EFSCxR9zDRLnEFa_O608NdqhHlSyM=',
        price:80},
        {id:3,
          name:'Momo',
          description:'hjklkjhvcv',
          imageURL:'https://media.istockphoto.com/photos/fried-momos-dumpling-picture-id1341504203?b=1&k=20&m=1341504203&s=170667a&w=0&h=N9tPYCi0DuIFJkKYSzVRRmQfzgqfvOg1r7sOVuyP37M=',
          price:30},
          {id:4,
            name:'Veggi Pizza',
            description:'hjklkjhvcv',
            imageURL:'https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            price:30},
            {id:5,
              name:'Cheese Pizza',
              description:'hjklkjhvcv',
              imageURL:'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlc3MlMjBwaXp6YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
              price:30},
              {id:6,
                name:'Veg Burger',
                description:'hjklkjhvcv',
                imageURL:'https://media.istockphoto.com/photos/veg-burger-picture-id469571943?s=612x612',
                price:30},
                {id:7,
                  name:'Veg momo',
                  description:'hjklkjhvcv',
                  imageURL:'https://images.unsplash.com/photo-1626776877921-f8d7b932bafc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW9tb3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                  price:30},
                  {id:8,
                    name:'Fries',
                    description:'hjklkjhvcv',
                    imageURL:'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZnJpZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                    price:30},
                    {id:9,
                      name:'Garlic Bread',
                      description:'hjklkjhvcv',
                      imageURL:'https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z2FybGljJTIwYnJlYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                      price:30},
  ];

  getfoodById(foodid:number):foodModule{
    return this.getAllImages().find(foods=>foods.id==foodid);
  }

  getAllImages():foodModule[]{
   return this.foods;
  
    
  }
}
