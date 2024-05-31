import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgpeliculasEditComponent } from './imgpeliculas-edit.component';

describe('ImgpeliculasEditComponent', () => {
  let component: ImgpeliculasEditComponent;
  let fixture: ComponentFixture<ImgpeliculasEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgpeliculasEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImgpeliculasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
