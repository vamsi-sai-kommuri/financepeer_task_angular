import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private REST_API_SERVER = "http://localhost:5000";
  constructor(private httpClient: HttpClient) { }

  public checkLogin(username:any ,password:any){
    return this.httpClient.post<any>(this.REST_API_SERVER,{'usr':username,"pass":password});
  }

  public getData(){
    return this.httpClient.get<any>(this.REST_API_SERVER+'/getData');
  }
}
