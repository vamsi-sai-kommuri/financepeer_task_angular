import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {ApiService} from "../api.service"
import { from } from 'rxjs';

@Component({
  selector: 'app-displaycomponent',
  templateUrl: './displaycomponent.component.html',
  styleUrls: ['../login/login.component.css']
})
export class DisplaycomponentComponent implements OnInit {

  constructor(private dataService: ApiService) { }

  items=[] as any

  

  ngOnInit(): void {

      this.dataService.getData().subscribe((data)=>{
        this.items = data

        

       

        
       

    })
  }

}
