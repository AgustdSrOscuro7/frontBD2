import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // Importa FormsModule si lo necesitas
import { PeliculaEditComponent } from './pelicula-edit.component';

describe('PeliculaEditComponent', () => {
  let component: PeliculaEditComponent;
  let fixture: ComponentFixture<PeliculaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeliculaEditComponent],
      imports: [FormsModule] // Asegúrate de importar FormsModule si lo necesitas
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeliculaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
