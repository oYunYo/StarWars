import { Injectable } from '@angular/core';
import {Planet} from '../models/planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  planets: Planet[];

  constructor() {
    this.planets = [
      new Planet(1, 'Pluton', false,
  'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Nh-pluto-in-true-color_2x_JPEG.jpg/290px-Nh-pluto-in-true-color_2x_JPEG.jpg'),
      new Planet(2, 'terre', true, 'https://cdn.pixabay.com/photo/2011/12/13/14/31/earth-11015_960_720.jpg')
    ];
  }
  getPlanets(): Planet[] {
    return this.planets;
  }
  getPlanetById(id: number): Planet {
    return this.planets.filter(planet =>
      planet.id === id)[0];
  }

  addPlanet(planet: Planet): void {
    this.planets.push(planet);
  }

  delete(planetToDelete: Planet) {
    this.planets = this.planets.filter(planet => planet !== planetToDelete);
  }

  updatePlanet(planetToUpdate: Planet) {
    this.planets.filter(planet =>
      planet.id === planetToUpdate.id)[0] = planetToUpdate;
  }
}
