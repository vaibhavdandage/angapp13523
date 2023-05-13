import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [{path:"", redirectTo:"login",pathMatch:"full"},
{path:"login",component:LoginComponent},
{path:"register",component:RegisterComponent},
{path:"home",component:HomeComponent,
  children:[
    {path:"products", component:ProductsComponent},
    {path:"contact", component:ContactComponent},
    {path:"about", component:AboutComponent}
  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
