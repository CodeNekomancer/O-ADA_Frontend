import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridCardUaccComponent } from './components/grid-card-uacc/grid-card-uacc.component';
import { HeaderComponent } from '../shared/component/header/header.component';
import { UaccRoutingModule } from './uacc-routing.module';


@NgModule({
  declarations: [
    GridCardUaccComponent,
    HeaderComponent],
  imports: [
    CommonModule,
    UaccRoutingModule,
  ]
})
export class UaccModule { }
