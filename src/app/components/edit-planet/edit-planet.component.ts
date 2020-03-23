import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Planet} from '../../models/planet';
import {PlanetsService} from '../../services/planet.service';

@Component({
  selector: 'app-edit-planet',
  templateUrl: './edit-planet.component.html',
  styleUrls: ['./edit-planet.component.css']
})
export class EditPlanetComponent implements OnInit {
  planetToUpdate: Planet;
  isLoading:boolean;
  yesNoItem = [{text: 'Oui', valeur: true}, {text: 'Non', valeur: false}];
  constructor(private activatedRoute: ActivatedRoute,
              private planetService: PlanetsService,
              private router: Router) { }

  ngOnInit() {
    this.isLoading = true;     
    this.planetService.getOnePlanet(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe((data: Planet) => {         
      this.planetToUpdate = data;         
      this.isLoading = false;     
    }); 
  }

  updatePlanet() {
    this.planetService.updatePlanet(this.planetToUpdate).subscribe(data => {
      this.router.navigate(['/planets']);
    });
 
  }

  onSubmit() {
    this.planetService.updatePlanet(this.planetToUpdate).subscribe(then => {
      this.router.navigate(['/planets']);
    });

}
}
