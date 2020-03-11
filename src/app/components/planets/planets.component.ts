import { Component, OnInit } from '@angular/core';
import {PlanetService} from '../../services/planet.service';
import {Planet} from '../../models/planet';
import {Router} from '@angular/router';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  planets: Planet[];
  constructor(private planetService: PlanetService) { }

  ngOnInit() {
    this.planets = this.planetService.getPlanets();
    console.log(this.planets);
  }

  deletePlanet(planet: Planet) {
    this.planetService.delete(planet);
    this.planets = this.planetService.getPlanets();
  }

}
