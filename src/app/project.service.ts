import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {HttpClient, HttpHeaders,  HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  
  headers = new HttpHeaders()
            .set('Authorization','Bearerr '+ localStorage.getItem('access_token'))
            .set('Access-Control-Allow-Origin','http, https')
            .set('Access-Control-Allow-Methods','PUT, GET, POST, DELETE, OPTONS')
            .set('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization')
            ;
  constructor(private http:HttpClient) { }
  //private baseUrl = 'http://ec2-43-205-129-153.ap-south-1.compute.amazonaws.com:8080';
  //private baseUrl = 'http://3.109.139.61:8080';
  private baseUrl = 'http://localhost:8080';

  getProducts(){
    console.log('in get products');
    console.log(localStorage.getItem('access_token'));
    this.headers = new HttpHeaders().set('Authorization','Bearer '+ localStorage.getItem('access_token'));
    return this.http.get(`${this.baseUrl}`+'/get_all_products',{ headers: this.headers });
  }

  getStock(){
    console.log('in get stock');
    console.log(localStorage.getItem('access_token'));
    this.headers = new HttpHeaders().set('Authorization','Bearer '+ localStorage.getItem('access_token'));
    return this.http.get(`${this.baseUrl}`+'/stock',{ headers: this.headers });
  }

  getProfile(){
    console.log('in get profile');
    console.log(localStorage.getItem('access_token'));
    this.headers = new HttpHeaders().set('Authorization','Bearer '+ localStorage.getItem('access_token'));
    return this.http.get(`${this.baseUrl}`+'/get_profile',{ headers: this.headers });
  }

  login(user:UserLogin){
    console.log(user);
    return this.http.post(`${this.baseUrl}`+'/authenticate',user);
  }

  register(user:UserLogin){
    return this.http.post(`${this.baseUrl}`+'/register',user);
  }

  message(message:Message){
    console.log('in send message');
    console.log(localStorage.getItem('access_token'));
    this.headers = new HttpHeaders().set('Authorization','Bearer '+ localStorage.getItem('access_token'));
    return this.http.post(`${this.baseUrl}`+'/sendmessage',message,{ headers: this.headers });
  }

  addProduct(product:Product){
    console.log('in send message');
    console.log(localStorage.getItem('access_token'));
    this.headers = new HttpHeaders().set('Authorization','Bearer '+ localStorage.getItem('access_token'));
    return this.http.post(`${this.baseUrl}`+'/add_product',product,{ headers: this.headers });
  }
}

class UserLogin{}

class Message{}

class Stock{}

class Product{}