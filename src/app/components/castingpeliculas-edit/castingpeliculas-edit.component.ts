import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CastingPeliculaService } from '../../services/castingpelicula.service';
import { CastingPelicula } from '../../interfaces/castingpelicula.interface';

@Component({
  selector: 'app-casting-edit',
  templateUrl: './castingpeliculas-edit.component.html',
  styleUrls: ['./castingpeliculas-edit.component.css']
})
export class CastingEditComponent implements OnInit {
  castingForm: FormGroup;
  esNuevo: boolean = true;

  constructor(
    private fb: FormBuilder,
    private castingService: CastingPeliculaService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.castingForm = this.fb.group({
      Personaje: ['', Validators.required],
      PeliculasId: ['', Validators.required], // Añade campo para el ID de la película
      HeroesId: ['', Validators.required],    // Añade campo para el ID del héroe
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.esNuevo = false;
      this.castingService.getUnCastingPelicula(id).subscribe(
        (data: CastingPelicula) => {
          this.castingForm.patchValue(data);
        },
        (error: any) => {
          console.error('Error al obtener el casting', error);
        }
      );
    }
  }

  guardarCasting(): void {
    if (this.castingForm.invalid) {
      return;
    }

    const casting: CastingPelicula = this.castingForm.value;

    if (this.esNuevo) {
      this.castingService.crud_CastingPelicula(casting, 'insertar').subscribe(
        (data: any) => {
          console.log('Casting insertado:', data);
          this.router.navigate(['/casting-list']);
        },
        (error: any) => {
          console.error('Error al insertar el casting:', error);
        }
      );
    } else {
      casting._id = this.route.snapshot.paramMap.get('id')!;
      this.castingService.crud_CastingPelicula(casting, 'modificar').subscribe(
        (data: any) => {
          console.log('Casting actualizado:', data);
          this.router.navigate(['/casting-list']);
        },
        (error: any) => {
          console.error('Error al actualizar el casting:', error);
        }
      );
    }
  }

  cancelar(): void {
    this.router.navigate(['/casting-list']);
  }
}
