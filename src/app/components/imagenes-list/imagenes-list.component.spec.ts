import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenesListComponent } from './imagenes-list.component';

describe('ImagenesListComponent', () => {
  let component: ImagenesListComponent;
  let fixture: ComponentFixture<ImagenesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagenesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImagenesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
