import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private activated:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }
  onGo(){
    this.router.navigateByUrl('/home');
  }

}
