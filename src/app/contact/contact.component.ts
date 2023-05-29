import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  message!: Message[];
  messageForm!: FormGroup;
  form!: FormGroup;
  typeSelected!: string;

  constructor(private formBuilder: FormBuilder,private service:ProjectService,private router: Router,private spinnerService: NgxSpinnerService) { }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      username: [null, [Validators.required]],
      subject: [null, Validators.required],
      message:[null, Validators.required]
    });
  }
  

 

  onSubmit(){

    this.showSpinner();
    this.service.message(this.messageForm.value).subscribe((data)=>{
      console.warn(this.messageForm.value);
      console.log(data);
      var data1 = <any>data;
      this.message = data1.object;
      localStorage.setItem('access_token', data1.token);

      console.log(localStorage.getItem('access_token'));
      if(localStorage.getItem('access_token')==null){
        this.router.navigate(['login']);
       }
       else{

        this.router.navigate(['message']);

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

}

class Message {  
  username!: string;  
  subject!: string;
  message!: string;
} 