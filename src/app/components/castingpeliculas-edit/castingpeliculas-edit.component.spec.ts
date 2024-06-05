import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastingEditComponent } from './castingpeliculas-edit.component';

describe('CastingpeliculasEditComponent', () => {
  let component: CastingEditComponent;
  let fixture: ComponentFixture<CastingEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CastingEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CastingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
