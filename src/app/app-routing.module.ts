import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path: 'auth',
    loadChildren: ()=> import ('./auth/auth.module').then(m=>m.AuthModule),
  },
  {
    path:'universe',
    loadChildren: ()=>import('./universe/universe.module').then(m=>m.UniverseModule),
  },
  {
    path:'home',
    loadChildren: ()=>import('./landing/landing.module').then(m=>m.LandingModule),
  },
  {
    path:'**',
    redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
