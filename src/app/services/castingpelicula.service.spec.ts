import { TestBed } from '@angular/core/testing';

import { CastingpeliculaService } from './castingpelicula.service';

describe('CastingpeliculaService', () => {
  let service: CastingpeliculaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CastingpeliculaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
