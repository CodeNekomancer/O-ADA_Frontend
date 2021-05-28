import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UAccViewComponent } from './components/uacc-view/uacc-view.component';

const routes:Routes = [
  {
    path: '',
    component: UAccViewComponent,
  },
  {
    path:'home',
    component: UAccViewComponent,
	},
  {
    path: '**',
    redirectTo: 'home',
    component: UAccViewComponent
  }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UaccRoutingModule { }
