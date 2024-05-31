import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgheroesEditComponent } from './imgheroes-edit.component';

describe('ImgheroesEditComponent', () => {
  let component: ImgheroesEditComponent;
  let fixture: ComponentFixture<ImgheroesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgheroesEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImgheroesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
