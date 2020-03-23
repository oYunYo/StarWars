import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { VehiculsComponent } from './components/vehiculs/vehiculs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddPlanetComponent } from './components/add-planet/add-planet.component';
import {FormsModule} from '@angular/forms';
import { EditPlanetComponent } from './components/edit-planet/edit-planet.component';
import { HttpClientModule } from '@angular/common/http';
import { PlanetDetailComponent } from './components/planet-detail/planet-detail.component'; 

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PlanetsComponent,
    VehiculsComponent,
    DashboardComponent,
    AddPlanetComponent,
    EditPlanetComponent,
    PlanetDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
