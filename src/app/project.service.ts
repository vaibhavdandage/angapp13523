import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {HttpClient, HttpHeaders,  HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  endpoint: string = 'http://localhost:8081';
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin','http://localhost:4300/');


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
