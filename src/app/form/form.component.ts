import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload.service'; 
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  // Variable to store shortLink from api response 
  shortLink: string = ""; 
  loading: boolean = false; // Flag variable 
  file?:File ; // Variable to store file 

  // Inject service  
  constructor(private fileUploadService: FileUploadService,private httpClient:HttpClient,private router:Router) { } 

  onChange(event:any) { 
    this.file = event.target.files[0]; 
} 

// OnClick of button Upload 
onUpload() { 
    this.loading = !this.loading; 
    let filenameExtension = this.file?.name.split('.')[1]

    if(filenameExtension==="json"){

          this.fileUploadService.upload(this.file).subscribe( 
            (res: any) => { 
                if (res) { 
                this.router.navigate(['display'])
                  
                } 
            } 
        ); 

    }else{
      alert("Invalid File type")
      this.loading = false;
      
    }


    
   

} 

}
