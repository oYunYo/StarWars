import { Component, OnInit } from '@angular/core';
import { PlanetsService } from 'src/app/services/planet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Planet } from 'src/app/models/planet';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent implements OnInit {
  isLoading: boolean;
  planet: Planet;

  constructor(private planetService: PlanetsService, private activatedRoute: ActivatedRoute, private router : Router){ }

  ngOnInit() {   
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.isLoading = true;     
    this.planetService.getOnePlanet(id).subscribe((data: Planet) => {   
        this.planet = data;         
        this.isLoading = false;     
      }); 
  }

}
