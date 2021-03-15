import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {

    if(localStorage.getItem("isLogged")==="false"){
     this.router.navigate([''])
    }
 }

    Logout(){
      localStorage.setItem("isLogged","false")
      this.router.navigate([''])
    }
}
