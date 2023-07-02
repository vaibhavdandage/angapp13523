import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  implements OnInit{
  apiData!: string;
  profile!: Profile;
  constructor(private service:ProjectService) {}
 
  ngOnInit(): void {
    console.log("in get products");
    this.service.getProfile().subscribe((data)=>{
     console.log(data);
     var data1 = <any>data;
     this.profile = data1.object;
     console.log(data1.object[0].price);
     console.log(this.profile);
    });
  }
}

class Profile {  
  id!: number;
  name!: string;  
  address!: string;  
  imageUrl!: string;  
  dob!: string;  
} 