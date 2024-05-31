import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastingpeliculasListComponent } from './castingpeliculas-list.component';

describe('CastingpeliculasListComponent', () => {
  let component: CastingpeliculasListComponent;
  let fixture: ComponentFixture<CastingpeliculasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CastingpeliculasListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CastingpeliculasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
