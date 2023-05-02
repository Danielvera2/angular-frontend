import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';



@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
