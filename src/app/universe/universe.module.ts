import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiverseViewComponent } from './components/multiverse-view/multiverse-view.component';
import { HeaderComponent } from '../shared/component/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { UniverseRoutingModule } from './universe-routing.module';
import { UniverseResolverService } from './resolvers/universe-resolver.service';
import { GridCardComponent } from './components/grid-card/grid-card.component';



@NgModule({
  declarations: [
    MultiverseViewComponent,
    HeaderComponent,
    GridCardComponent,   
  ],
  imports: [
    CommonModule,
    UniverseRoutingModule
  ],
  providers:[UniverseResolverService]
})
export class UniverseModule { }
