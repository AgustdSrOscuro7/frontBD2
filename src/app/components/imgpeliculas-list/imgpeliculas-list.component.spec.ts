import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgpeliculasListComponent } from './imgpeliculas-list.component';

describe('ImgpeliculasListComponent', () => {
  let component: ImgpeliculasListComponent;
  let fixture: ComponentFixture<ImgpeliculasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgpeliculasListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImgpeliculasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
