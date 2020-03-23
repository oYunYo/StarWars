import { TestBed } from '@angular/core/testing';

import { PlanetsService } from './planet.service';

describe('PlanetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlanetsService = TestBed.get(PlanetsService);
    expect(service).toBeTruthy();
  });
});
