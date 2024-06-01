// src/app/components/imagenes-list/imagenes-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ImagenesService } from '../../services/imagenes.service';
import { Imagen } from '../../interfaces/imagenes.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-imagenes-list',
  templateUrl: './imagenes-list.component.html',
  styleUrls: ['./imagenes-list.component.css']
})
export class ImagenesListComponent implements OnInit {
  imagenes: Imagen[] = [];

  constructor(private imagenesService: ImagenesService) {}

  ngOnInit(): void {
    this.cargarImagenes();
  }

  cargarImagenes() {
    this.imagenesService.getImagenes().subscribe((data: any) => {
      this.imagenes = data;
      console.log(this.imagenes);
    });
  }

  eliminarImagen(imagen: Imagen) {
    this.imagenesService.crud_Imagenes(imagen, 'eliminar').subscribe(
      (res: any) => {
        if (res.ok) {
          Swal.fire('Eliminado', 'Imagen eliminada correctamente', 'success');
          this.cargarImagenes();
        } else {
          Swal.fire('Error', res.message, 'error');
        }
      },
      (error: any) => {
        console.error(error);
        Swal.fire('Error', 'No se pudo eliminar la imagen', 'error');
      }
    );
  }
}
