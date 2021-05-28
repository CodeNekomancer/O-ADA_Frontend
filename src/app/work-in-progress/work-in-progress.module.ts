import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WipComponent } from './component/wip/wip.component';
import { HeaderComponent } from '../shared/component/header/header.component';
import { WipRoutingModule } from './work-in-progress-routing.module';



@NgModule({
  declarations: [WipComponent],
  imports: [
    CommonModule,
    WipRoutingModule
  ]
})
export class WorkInProgressModule { }
