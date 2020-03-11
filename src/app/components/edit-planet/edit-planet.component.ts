import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Planet} from '../../models/planet';
import {PlanetService} from '../../services/planet.service';

@Component({
  selector: 'app-edit-planet',
  templateUrl: './edit-planet.component.html',
  styleUrls: ['./edit-planet.component.css']
})
export class EditPlanetComponent implements OnInit {
  planetToUpdate: Planet;
  yesNoItem = [{text: 'Oui', valeur: true}, {text: 'Non', valeur: false}];
  constructor(private activatedRoute: ActivatedRoute,
              private planetService: PlanetService,
              private router: Router) { }

  ngOnInit() {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.planetToUpdate = this.planetService.getPlanetById(id);
    console.log(this.planetToUpdate);
  }

  updatePlanet() {
    this.planetService.updatePlanet(this.planetToUpdate);
    this.router.navigate(['/planets']);
  }
}
