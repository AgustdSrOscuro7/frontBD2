import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Pelicula } from '../../interfaces/pelicula.interface';

@Component({
  selector: 'app-peliculas-list',
  templateUrl: './peliculas-list.component.html',
  styleUrls: ['./peliculas-list.component.css']
})
export class PeliculasListComponent implements OnInit {
  peliculas: Pelicula[] = [];

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit(): void {
    this.peliculasService.getPeliculas().subscribe(
      (data: Pelicula[]) => {
        this.peliculas = data;
        console.log('Peliculas obtenidas:', this.peliculas);
      },
      (error: any) => {
        console.error('Error al obtener las peliculas', error);
      }
    );
  }

  eliminarPelicula(id: string | undefined): void {
    if (id) {
      this.peliculasService.crud_Peliculas({ _id: id } as Pelicula, 'eliminar').subscribe(
        (data: any) => {
          this.peliculas = this.peliculas.filter(pelicula => pelicula._id !== id);
        },
        (error: any) => {
          console.error('Error al eliminar la pelicula', error);
        }
      );
    } else {
      console.error('Error: id es undefined');
    }
  }
}
