import { TestBed } from '@angular/core/testing';

import { ImgpeliculasService } from './imgpeliculas.service';

describe('ImgpeliculasService', () => {
  let service: ImgpeliculasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImgpeliculasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
