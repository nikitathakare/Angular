import { SucessComponent } from './sucess/sucess.component';
import { LoginComponent } from './login/login.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { HomeComponent } from './home/home.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:LoginComponent},
  { path: 'home',component:HomeComponent},
  { path: 'search/:searchItem',component:HomeComponent},
  { path: 'food/:id',component:FoodPageComponent},
  {path:'cart',component:CartPageComponent},
  {path:'sucess',component:SucessComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
