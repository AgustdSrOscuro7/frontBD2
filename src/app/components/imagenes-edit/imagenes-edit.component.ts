import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImagenesService } from '../../services/imagenes.service';
import { Imagen } from '../../interfaces/imagenes.interface';

@Component({
  selector: 'app-imagen-edit',
  templateUrl: './imagenes-edit.component.html',
  styleUrls: ['./imagenes-edit.component.css']
})
export class ImagenesEditComponent implements OnInit {
  imagenForm: FormGroup;
  esNueva: boolean = true;

  constructor(
    private fb: FormBuilder,
    private imagenesService: ImagenesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.imagenForm = this.fb.group({
      Descripcion: ['', Validators.required],
      Url: ['', Validators.required] // Suponiendo que la URL es obligatoria para la imagen
    });
  }

  ngOnInit(): void {
    this.obtenerImagen();
  }

  obtenerImagen(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.esNueva = false; // Estás editando una imagen existente
      this.imagenesService.getUnaImagen(id).subscribe(
        (data: Imagen) => {
          this.imagenForm.patchValue(data);
        },
        error => {
          console.error('Error al obtener la imagen', error);
        }
      );
    } else {
      this.esNueva = true; // Estás agregando una nueva imagen
      this.imagenForm.reset(); // Reinicia el formulario para una nueva imagen
    }
  }

  guardarImagen(): void {
    if (this.imagenForm.invalid) {
      return;
    }

    const imagen: Imagen = this.imagenForm.value;

    if (this.esNueva) {
      this.imagenesService.crud_Imagenes(imagen, 'insertar').subscribe(
        response => {
          console.log('Imagen insertada:', response);
          this.router.navigate(['/imagenes-list']);
        },
        error => {
          console.error('Error al insertar la imagen:', error);
        }
      );
    } else {
      imagen._id = this.route.snapshot.paramMap.get('id')!;
      this.imagenesService.crud_Imagenes(imagen, 'modificar').subscribe(
        response => {
          console.log('Imagen actualizada:', response);
          this.router.navigate(['/imagenes-list']);
        },
        error => {
          console.error('Error al actualizar la imagen:', error);
        }
      );
    }
  }

  cancelar(): void {
    this.router.navigate(['/imagenes-list']);
  }
}
