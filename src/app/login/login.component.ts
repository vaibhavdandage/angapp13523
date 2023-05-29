import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { FormGroup, FormControl ,FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user!: UserLogin[];
  loginForm!: FormGroup;
  form!: FormGroup;
  typeSelected!: string;
  public captchaResolved : boolean = false;


  constructor(private formBuilder: FormBuilder,private service:ProjectService,private router: Router,private spinnerService: NgxSpinnerService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, Validators.required],
      recaptchaReactive:[null, Validators.required]
    });
  }
  

 

  onSubmit(){

    this.showSpinner();
    this.service.login(this.loginForm.value).subscribe((data)=>{
      //console.warn(this.loginForm.value);
      console.log(data);
      var data1 = <any>data;
      this.user = data1.object;
      localStorage.setItem('access_token', data1.token);

      console.log(localStorage.getItem('access_token'));
      if(localStorage.getItem('access_token')==null){
        this.router.navigate(['register']);
       }
       else{

        this.router.navigate(['home/products']);

       }
      //console.log(this.user);
      //console.log(data1.object[0]);
  
     });
     
     
  
   }


   public showSpinner(): void {
    console.log("in spinner");
    this.spinnerService.show();

    setTimeout(() => {
      this.spinnerService.hide();
    }, 5000); // 5 seconds
  }

  checkCaptcha(captchaResponse : string) {

    console.log("in check captcha");
    this.captchaResolved = (captchaResponse && captchaResponse.length > 0) ? true : false
}

  }


class UserLogin {  
  username!: string;  
  password!: string;  
} 