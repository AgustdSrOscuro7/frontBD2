import { TestBed } from '@angular/core/testing';

import { ImgheroesService } from './imgheroes.service';

describe('ImgheroesService', () => {
  let service: ImgheroesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImgheroesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
