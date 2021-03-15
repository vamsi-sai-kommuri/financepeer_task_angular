import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {ApiService} from "../api.service"
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  
  constructor(private dataService: ApiService, private router:Router) { }
  username?:string
  password?:string

  ngOnInit(): void {

     if(localStorage.getItem("isLogged")==="true"){
      this.router.navigate(['form'])
     }
  }
  onLoginClick(){
    
    if(this.username!=undefined && this.password!=undefined){

      this.dataService.checkLogin(this.username,this.password).subscribe((data)=>{

        if(data.status){
          localStorage.setItem("isLogged","true")
            this.router.navigate(['form'])
        }else{
          alert("Invalide credentials")
        }

      })

    }else{
      alert("Please enter the details!")
    }
    
  }
}
