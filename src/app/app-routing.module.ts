import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { CartComponent } from './cart/cart.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { MyordersComponent } from './myorders/myorders.component';
import { PaymentComponent } from './payment/payment.component';
import { ProfileComponent } from './profile/profile.component';
import { StockComponent } from './stock/stock.component';
import { ComplainsComponent } from './complains/complains.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [{path:"", redirectTo:"login",pathMatch:"full"},
{path:"login",component:LoginComponent},
{path:"register",component:RegisterComponent},
{path:"home",component:HomeComponent,
  children:[
    {path:"products", component:ProductsComponent},
    {path:"contact", component:ContactComponent},
    {path:"about", component:AboutComponent},
    {path:"addproduct", component:AddproductComponent},
    {path:"admin", component:AdminComponent},
    {path:"cart", component:CartComponent},
    {path:"editprofile", component:EditprofileComponent},
    {path:"myorders", component:MyordersComponent},
    {path:"payment", component:PaymentComponent},
    {path:"profile", component:ProfileComponent},
    {path:"stock", component:StockComponent},
    {path:"complains", component:ComplainsComponent},
    {path:"logout", component:LogoutComponent}
  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
