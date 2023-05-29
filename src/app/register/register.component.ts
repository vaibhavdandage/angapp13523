import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { FormGroup, FormControl ,FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user!: UserRegistration[];
  registerForm!: FormGroup;
  form!: FormGroup;
  typeSelected!: string;
  public captchaResolved : boolean = false;

  constructor(private formBuilder: FormBuilder,private service:ProjectService,private router: Router,private spinnerService: NgxSpinnerService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: [null, [Validators.required]],
      password: [null, Validators.required],
      mobile: [null, Validators.required],
      recaptchaReactive:[null, Validators.required]
    });
  }
  

 

  onSubmit(){
    this.showSpinner();
    this.service.register(this.registerForm.value).subscribe((data)=>{
      console.warn(this.registerForm.value);
      console.log(data);
      var data1 = <any>data;
      this.user = data1.object;
      if(this.user==null){
        this.router.navigate(['register']);
       }
       else{
        this.router.navigate(['home']);
       }
      console.log(this.user);
      console.log(data1.object[0]);
  
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


class UserRegistration {  
  email!: string;  
  password!: string;
  mobile!: string;  
} 