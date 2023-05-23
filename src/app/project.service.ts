import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http:HttpClient) { }
  private baseUrl = 'http://localhost:8081';

  getProducts(){
    return this.http.get(`${this.baseUrl}`+'/products');
  }

  login(user:UserLogin){
    console.log(user);
    return this.http.post(`${this.baseUrl}`+'/authenticate',user);
  }

  register(user:UserLogin){
    return this.http.post(`${this.baseUrl}`+'/register',user);
  }
}

class UserLogin{

}
