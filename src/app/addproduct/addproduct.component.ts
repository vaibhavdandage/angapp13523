import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  product!: Product[];
  productForm!: FormGroup;
  form!: FormGroup;
  typeSelected!: string;

  
  constructor(private formBuilder: FormBuilder,private service:ProjectService,private router: Router,private spinnerService: NgxSpinnerService) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      title: [null, [Validators.required]],
      imageUrl: [null, Validators.required],
      price:[null, Validators.required],
      shippingCharges:[null, Validators.required]
    });
  }
  

 

  onSubmit(){

    console.log(this.productForm.value);
    this.showSpinner();
    this.service.addProduct(this.productForm.value).subscribe((data)=>{
      console.warn(this.productForm.value);
      console.log(data);
      var data1 = <any>data;
      this.product = data1.object;
      localStorage.setItem('access_token', data1.token);

      console.log(localStorage.getItem('access_token'));
      if(localStorage.getItem('access_token')==null){
        this.router.navigate(['login']);
       }
       else{

        this.router.navigate(['home']);

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

class Product {  
  title!: string;  
  imageUrl!: string;
  price!: string;
  shippingCharges!: string;
} 
