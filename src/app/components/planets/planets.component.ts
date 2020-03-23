import { Component, OnInit } from '@angular/core';
import {PlanetsService} from '../../services/planet.service';
import {Planet} from '../../models/planet';
import {Router} from '@angular/router';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  planets: Planet[];
  constructor(private planetsService: PlanetsService) { }

  isLoading: boolean;          
  ngOnInit() {
    this.isLoading = true;
    return this.planetsService.getPlanets().subscribe((data: Planet[]) => {
      this.planets = data; 
      this.isLoading = false; 
  });
}
  
  deletePlanet(id: number) {   
    this.isLoading = true;   
    this.planetsService.deletePlanet(id).subscribe(then => {       
      this.planetsService.getPlanets().subscribe((data: Planet[]) => {           
        this.planets = data;           
        this.isLoading = false;       
      });   
    }); 
  }
}