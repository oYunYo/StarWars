import { Component, OnInit } from '@angular/core';
import {Planet} from '../../models/planet';
import {PlanetService} from '../../services/planet.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-planet',
  templateUrl: './add-planet.component.html',
  styleUrls: ['./add-planet.component.css']
})
export class AddPlanetComponent implements OnInit {
  planetForm = new Planet();
  yesNoItem = [{text: 'Oui', valeur: 1}, {text: 'Non', valeur: 0}];
  constructor(private planetService: PlanetService, private router: Router) { }

  ngOnInit() {
  }

  addPlanet() {
    this.planetService.addPlanet(this.planetForm);
    this.router.navigate(['/planets']);
  }
}
