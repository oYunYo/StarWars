import { Injectable } from '@angular/core';
import {Planet} from '../models/planet';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  getPlanetByiD(id: number) {
    throw new Error("Method not implemented.");
  }   
  planets: Planet[];   
  apiURL = 'http://localhost:3000/planet';   
  httpOptions = {       
    headers: new HttpHeaders({             
      'Content-Type': 'application/json'         
    })     
  };   
  
  constructor(private http: HttpClient) {     
    this.planets = [];   
  } 
  
  handleError(error) {     
    let errorMessage = '';     
    if ( error.error instanceof ErrorEvent ) {         
      // Get client-side error         
      errorMessage = error.error.message;     
    } else {         
      // Get server-side error         
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;     
    }     
    window.alert(errorMessage);     
    return throwError(errorMessage); 
  } 



  getPlanets(): Observable<Planet[]> {      
    return this.http.get<Planet[]>(this.apiURL)          
      .pipe(             
          retry(1),              
          catchError(this.handleError)          
      ); 
  }

  getOnePlanet(id: number): Observable<Planet> {     
    return this.http.get<Planet>(this.apiURL + '/' + id)         
      .pipe(             
        retry(1),             
        catchError(this.handleError)         
      ); 
  }

  deletePlanet(id: number): Observable<Planet> {     
    return this.http.delete<Planet>(this.apiURL + '/' + id)         
    .pipe(             
      retry(1),             
      catchError(this.handleError)         
    ); 
  }

addPlanet(planet:Planet): Observable<Planet> {
  return this.http.post<Planet>(this.apiURL, planet, this.httpOptions).pipe(
    catchError(this.handleError)
  );
}

updatePlanet(planet:Planet): Observable<Planet> {
  return this.http.put<Planet>(this.apiURL + '/' + planet.id , planet, this.httpOptions).pipe(
    catchError(this.handleError)
  );
}

//   getPlanetById(id: number): Planet {
//     return this.planets.filter(planet =>
//       planet.id === id)[0];
//   }

//   addPlanet(planet: Planet): void {
//     this.planets.push(planet);
//   }

//   delete(planetToDelete: Planet) {
//     this.planets = this.planets.filter(planet => planet !== planetToDelete);
//   }

//   updatePlanet(planetToUpdate: Planet) {
//     this.planets.filter(planet =>
//       planet.id === planetToUpdate.id)[0] = planetToUpdate;
//   }
}