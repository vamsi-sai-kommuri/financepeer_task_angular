import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 
import {Observable} from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  

  baseApiUrl = "http://127.0.0.1:5000/form"
    
  constructor(private http:HttpClient) { } 
  
  // Returns an observable 
  upload(file:any):Observable<any> { 
  
      // Create form data 
      const formData = new FormData();  
        
      // Store form name as "file" with file data 
      formData.append("file", file, file.name); 
        console.log(formData)
      // Make http post request over api 
      // with formData as req 
      return this.http.post(this.baseApiUrl, formData) 
  } 
}
