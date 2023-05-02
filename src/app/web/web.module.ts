import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactComponent } from './contact/contact.component';
import { WebComponent } from './web.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ContactsComponent,
    ContactComponent,
    WebComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WebModule { }
