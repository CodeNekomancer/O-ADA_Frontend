import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WipComponent } from './component/wip/wip.component';

const routes:Routes = [
  {
    path: '',
    component: WipComponent,
  },
  {
    path: '**',
    redirectTo: '',
    component: WipComponent
  }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WipRoutingModule { }
