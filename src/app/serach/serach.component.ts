import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serach',
  templateUrl: './serach.component.html',
  styleUrls: ['./serach.component.css']
})
export class SerachComponent implements OnInit {
  searchItem:string='';
  constructor(private router:ActivatedRoute, private route:Router) { }

  ngOnInit(): void {
    this.router.params.subscribe(params=>{
      if(params['searchItem'])
      this.searchItem=params['searchItem'];
    })
  }
  search():void{
    if(this.searchItem){
      this.route.navigateByUrl('/search/'+ this.searchItem)
    }


  }

}
