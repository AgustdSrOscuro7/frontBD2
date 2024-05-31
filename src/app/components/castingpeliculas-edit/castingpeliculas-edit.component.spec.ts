import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastingpeliculasEditComponent } from './castingpeliculas-edit.component';

describe('CastingpeliculasEditComponent', () => {
  let component: CastingpeliculasEditComponent;
  let fixture: ComponentFixture<CastingpeliculasEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CastingpeliculasEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CastingpeliculasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
