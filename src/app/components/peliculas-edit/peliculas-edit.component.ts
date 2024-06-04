import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeliculasService } from '../../services/peliculas.service';
import { Pelicula } from '../../interfaces/pelicula.interface';

@Component({
  selector: 'app-peliculas-edit',
  templateUrl: './peliculas-edit.component.html',
  styleUrls: ['./peliculas-edit.component.css']
})
export class PeliculasEditComponent implements OnInit {
  peliculaForm: FormGroup;
  esNuevo: boolean = true;

  constructor(
    private fb: FormBuilder,
    private peliculasService: PeliculasService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.peliculaForm = this.fb.group({
      Descripcion: ['', Validators.required],
      FechaLanzamiento: ['', Validators.required],
      Img: ['', Validators.required],
      Titulo: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.obtenerPelicula();
  }

  obtenerPelicula(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.esNuevo = false; // Estás editando una película existente
      this.peliculasService.getUnaPelicula(id).subscribe(
        (data: Pelicula) => {
          this.peliculaForm.patchValue(data);
        },
        error => {
          console.error('Error al obtener la película', error);
        }
      );
    } else {
      this.esNuevo = true; // Estás agregando una nueva película
      this.peliculaForm.reset(); // Reinicia el formulario para una nueva película
    }
  }
  
  guardarPelicula(): void {

    if (this.peliculaForm.invalid) {
      return;
    }

    const pelicula: Pelicula = this.peliculaForm.value;

    if (this.esNuevo) {
      this.peliculasService.crud_Peliculas(pelicula, 'insertar').subscribe(
        response => {
          console.log('Película insertada:', response);
          this.router.navigate(['/peliculas-list']);
        },
        error => {
          console.error('Error al insertar la película:', error);
        }
      );
    } else {
      pelicula._id = this.route.snapshot.paramMap.get('id')!;
      this.peliculasService.crud_Peliculas(pelicula, 'modificar').subscribe(
        response => {
          console.log('Película actualizada:', response);
          this.router.navigate(['/peliculas-list']);
        },
        error => {
          console.error('Error al actualizar la película:', error);
        }
      );
    }
  }

  cancelar(): void {
    this.router.navigate(['/peliculas-list']);
  }
}