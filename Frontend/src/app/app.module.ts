import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantCardComponent } from './plant/plant-card/plant-card.component';
import { PlantListComponent } from './plant/plant-list/plant-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
   declarations: [
      AppComponent,
      PlantCardComponent,
      PlantListComponent,
      NavBarComponent
   ],
   imports: [
	 BrowserModule,
	 AppRoutingModule
	],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
