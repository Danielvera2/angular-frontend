import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductsComponent } from './web/products/products.component';
import { CategoryComponent } from './pages/category/category.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { Error404Component } from './notfound/error404/error404.component';


const routes: Routes = [
  {path:"dashboard", component:DashboardComponent},
  {path:"product", component:ProductsComponent},
  {path:"category", component:CategoryComponent},
  {path:"login", component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:'**', component:Error404Component},
  {path:"", redirectTo:'./dashboard', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }