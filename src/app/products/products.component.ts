import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  apiData!: string;
  products1!: Product[];
  constructor(private service:ProjectService) {}
 
  ngOnInit(): void {
    console.log("in get products");
    this.service.getProducts().subscribe((data)=>{
     console.log(data);
     var data1 = <any>data;
     this.products1 = data1.object;
     console.log(data1.object[0].price);
     console.log(this.products1);
    });
  }

}


class Product {  
  id!: number;
  title!: string;  
  price!: string;  
  imageUrl!: string;  
  shippingCharges!: string;  
} 