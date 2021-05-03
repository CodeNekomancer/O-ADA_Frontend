import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultiverseViewComponent } from './multiverse-view/multiverse-view.component';
import { UniverseResolverService } from './resolvers/universe-resolver.service';

const routes:Routes = [
  {
    path: '',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component: MultiverseViewComponent,
    resolve:{patata:UniverseResolverService}
  }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniverseRoutingModule{}
