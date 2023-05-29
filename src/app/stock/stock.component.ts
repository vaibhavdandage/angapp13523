import { Component } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent {

  apiData!: string;
  products1!: Product[];
  constructor(private service:ProjectService) {}
 
  ngOnInit(): void {
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