import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { FormGroup, FormControl ,FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user!: UserLogin[];
  loginForm!: FormGroup;
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder,private service:ProjectService,private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required]],
      password: [null, Validators.required],
    });
  }
  

 

  onSubmit(){
    this.service.login(this.loginForm.value).subscribe((data)=>{
      console.warn(this.loginForm.value);
      console.log(data);
      var data1 = <any>data;
      this.user = data1.object;
      if(this.user==null){
        this.router.navigate(['register']);
       }
       else{
        this.router.navigate(['home/products']);
       }
      console.log(this.user);
      console.log(data1.object[0]);
  
     });
     
     
  
   }
  }


class UserLogin {  
  email!: string;  
  password!: string;  
} 