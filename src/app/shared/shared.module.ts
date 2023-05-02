import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';



@NgModule({
  declarations: [
    SharedComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    NavComponent,
    BreadcrumsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
