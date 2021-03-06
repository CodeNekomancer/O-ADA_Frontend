import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './component/landing/landing.component';

const routes:Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule{}
