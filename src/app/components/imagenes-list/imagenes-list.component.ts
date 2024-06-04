import { Component, OnInit } from '@angular/core';
import { ImagenesService } from '../../services/imagenes.service';
import { Imagen } from '../../interfaces/imagenes.interface';

@Component({
  selector: 'app-imagenes-list',
  templateUrl: './imagenes-list.component.html',
  styleUrls: ['./imagenes-list.component.css']
})
export class ImagenesListComponent implements OnInit {
  imagenes: Imagen[] = [];

  constructor(private imagenesService: ImagenesService) { }

  ngOnInit(): void {
    this.obtenerImagenes();
  }

  obtenerImagenes(): void {
    this.imagenesService.getImagenes().subscribe(
      (data: Imagen[]) => {
        console.log('Imágenes obtenidas:', data);
        this.imagenes = data;
      },
      error => {
        console.error('Error al obtener las imágenes', error);
      }
    );
  }

  eliminarImagen(id: string | undefined): void {
    if (id) {
      this.imagenesService.crud_Imagenes({ _id: id } as Imagen, 'eliminar').subscribe(
        response => {
          console.log('Imagen eliminada', response);
          this.obtenerImagenes();
        },
        error => {
          console.error('Error al eliminar la imagen', error);
        }
      );
    }
  }
}
