import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenesEditComponent } from './imagenes-edit.component';

describe('ImagenesEditComponent', () => {
  let component: ImagenesEditComponent;
  let fixture: ComponentFixture<ImagenesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagenesEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImagenesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
