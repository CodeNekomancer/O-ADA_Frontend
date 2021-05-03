import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiverseViewComponent } from './multiverse-view/multiverse-view.component';
import { HeaderComponent } from '../shared/component/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { UniverseRoutingModule } from './universe-routing.module';
import { UniverseResolverService } from './resolvers/universe-resolver.service';



@NgModule({
  declarations: [
    MultiverseViewComponent,
    HeaderComponent,   
  ],
  imports: [
    CommonModule,
    UniverseRoutingModule
  ],
  providers:[UniverseResolverService]
})
export class UniverseModule { }
