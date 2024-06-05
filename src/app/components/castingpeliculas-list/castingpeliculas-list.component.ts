import { Component, OnInit } from '@angular/core';
import { CastingPelicula } from '../../interfaces/castingpelicula.interface';
import { CastingPeliculaService } from '../../services/castingpelicula.service';

@Component({
  selector: 'app-casting-list',
  templateUrl: './castingpeliculas-list.component.html',
  styleUrls: ['./castingpeliculas-list.component.css']
})
export class CastingListComponent implements OnInit {
  castingList: CastingPelicula[] = [];

  constructor(private castingService: CastingPeliculaService) { }

  ngOnInit(): void {
    this.obtenerCasting();
  }

  obtenerCasting(): void {
    this.castingService.getCastingPelicula().subscribe(
      (data: any) => {
        this.castingList = data.casting;
      },
      (error: any) => {
        console.error('Error al obtener el casting', error);
      }
    );
  }

  eliminarCasting(casting: CastingPelicula): void {
    if (casting._id) {
      this.castingService.crud_CastingPelicula(casting, 'eliminar').subscribe(
        (data: any) => {
          this.castingList = this.castingList.filter(c => c._id !== casting._id);
        },
        (error: any) => {
          console.error('Error al eliminar el casting', error);
        }
      );
    } else {
      console.error('Error: ID del casting no definido');
    }
  }
}
