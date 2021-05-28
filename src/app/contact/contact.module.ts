import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactViewComponent } from './components/contact-view/contact-view.component';
import { ContactRoutingModule } from './contact-routing.module';
import { HeaderComponent } from '../shared/component/header/header.component';



@NgModule({
  declarations: [
    ContactViewComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
