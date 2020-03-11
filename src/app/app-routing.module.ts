import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {PlanetsComponent} from './components/planets/planets.component';
import {VehiculsComponent} from './components/vehiculs/vehiculs.component';
import {AddPlanetComponent} from './components/add-planet/add-planet.component';
import {EditPlanetComponent} from './components/edit-planet/edit-planet.component';


const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'planets', component: PlanetsComponent},
  {path: 'planets/add', component: AddPlanetComponent},
  {path: 'planets/edit/:id', component: EditPlanetComponent},
  {path: 'vehiculs', component: VehiculsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
