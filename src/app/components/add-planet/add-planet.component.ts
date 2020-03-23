import { Component, OnInit } from '@angular/core';
import {Planet} from '../../models/planet';
import {PlanetsService} from '../../services/planet.service';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-planet',
  templateUrl: './add-planet.component.html',
  styleUrls: ['./add-planet.component.css']
})
export class AddPlanetComponent implements OnInit {
  planetForm = new Planet();
  yesNoItem = [{text: 'Oui', valeur: 1}, {text: 'Non', valeur: 0}];
  constructor(private planetsService: PlanetsService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

onSubmit() {   
  this.planetsService.addPlanet(this.planetForm).subscribe(then => {       
    this.router.navigate(['/planets']);   
  }); 
}
}
