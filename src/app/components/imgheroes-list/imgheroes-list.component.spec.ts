import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgheroesListComponent } from './imgheroes-list.component';

describe('ImgheroesListComponent', () => {
  let component: ImgheroesListComponent;
  let fixture: ComponentFixture<ImgheroesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgheroesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImgheroesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
