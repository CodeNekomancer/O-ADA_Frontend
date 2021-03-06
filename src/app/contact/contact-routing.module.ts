import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactViewComponent } from './components/contact-view/contact-view.component';



const routes: Routes = [
  {
    path: '',
    component: ContactViewComponent
  },
  {
    path: 'view',
    component: ContactViewComponent
  },
  {
    path: '**',
    redirectTo: 'view',
    component: ContactViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }