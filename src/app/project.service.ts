import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {HttpClient, HttpHeaders,  HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  
  headers = new HttpHeaders().set('Authorization','Bearer '+ localStorage.getItem('access_token'));
  constructor(private http:HttpClient) { }
  private baseUrl = 'http://localhost:8080';


  getProducts(){
    console.log('in get products');
    console.log(localStorage.getItem('access_token'));
    return this.http.get(`${this.baseUrl}`+'/products',{ headers: this.headers });
  }

  getStock(){
    console.log('in get stock');
    console.log(localStorage.getItem('access_token'));
    return this.http.get(`${this.baseUrl}`+'/stock',{ headers: this.headers });
  }

  login(user:UserLogin){
    console.log(user);
    return this.http.post(`${this.baseUrl}`+'/authenticate',user);
  }

  register(user:UserLogin){
    return this.http.post(`${this.baseUrl}`+'/register',user);
  }

  message(message:Message){
    return this.http.post(`${this.baseUrl}`+'/message',message);
  }
}

class UserLogin{}

class Message{}

class Stock{}