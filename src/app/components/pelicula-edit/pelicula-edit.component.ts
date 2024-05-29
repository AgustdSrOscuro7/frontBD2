import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { Pelicula } from '../../interfaces/pelicula.interface';
import Swal from 'sweetalert2';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-pelicula-edit',
  templateUrl: './pelicula-edit.component.html',
  styleUrls: ['./pelicula-edit.component.css']
})
export class PeliculaEditComponent {
  idPelicula!: string;

  unaPelicula: Pelicula = {
    Id: '',
    Descripcion: '',
    FechaLanzamiento: '',
    Img: '',
    Titulo: '',
    ImgPeliculas: ''
  };

  unResultado!: any;
  unaAccion: string = 'Mensaje';
  unMensaje: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dataBD: PeliculasService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.idPelicula = params['idpelicula'];
      console.log('IDPELICULA', this.idPelicula);

      if (this.idPelicula !== 'nuevo') {
        this.cargarPeliculaBD();
      }
    });
  }

  async cargarPeliculaBD() {
    try {
      const data: Pelicula = await firstValueFrom(this.dataBD.getUnaPelicula(this.idPelicula));
      this.unaPelicula = data;
    } catch (error) {
      console.error(error);
    }
  }

  guardar() {
    console.log("Se envió Guardar");
    if (this.idPelicula === 'nuevo') {
      this.nuevaPelicula();
    } else {
      this.actualizarPelicula();
    }
  }

  actualizarPelicula() {
    this.dataBD.crud_Peliculas(this.unaPelicula, 'modificar').subscribe(
      (res: any) => {
        this.unResultado = res;
        console.log('RESULTADO_ACTUALIZAR', this.unResultado);

        if (this.unResultado.Ok) {
          this.unaAccion = 'Mensaje:';
          this.unMensaje = this.unResultado.msg;
          setTimeout(() => (this.unMensaje = ''), 3000);

          Swal.fire({
            icon: 'info',
            title: 'Información',
            text: this.unResultado.msg,
          });

          this.router.navigate(['/peliculas']);
        } else {
          this.unaAccion = 'Error:';
          this.unMensaje = this.unResultado.error.msg;
          setTimeout(() => (this.unMensaje = ''), 3000);
        }
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  nuevaPelicula() {
    this.dataBD.crud_Peliculas(this.unaPelicula, 'insertar').subscribe(
      (res: any) => {
        this.unResultado = res;
        console.log('RESULTADO_NUEVO', this.unResultado);

        if (this.unResultado.Ok) {
          Swal.fire({
            icon: 'info',
            title: 'Información',
            text: this.unResultado.msg,
          });

          this.unaAccion = 'Mensaje:';
          this.unMensaje = this.unResultado.msg;
          setTimeout(() => (this.unMensaje = ''), 3000);

          this.router.navigate(['/peliculas']);
        } else {
          this.unaAccion = 'Error:';
          this.unMensaje = this.unResultado.msg;
          setTimeout(() => (this.unMensaje = ''), 3000);
        }
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
