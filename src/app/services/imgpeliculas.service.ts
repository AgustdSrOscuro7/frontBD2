import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ImgPelicula } from '../interfaces/imgpelicula.interface'; // Asegúrate de que la ruta sea correcta
import { URL_SERVICIOS_MONGODB } from '../config/url.servicios';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImgPeliculasService {

  constructor(public http: HttpClient) {}

  getImgPeliculas(): any {
    const url = `${URL_SERVICIOS_MONGODB}/api/imgpeliculas`;
    return this.http.get(url).pipe(
      map(data => {
        console.log('DATOS', data);
        return data;
      })
    );
  }

  getUnaImgPelicula(unId: string): any {
    const url = `${URL_SERVICIOS_MONGODB}/api/imgpeliculas/${unId}`;
    return this.http.get(url).pipe(
      map(data => {
        console.log('DATOS', data);
        return data;
      })
    );
  }

  crud_ImgPelicula(imgPelicula: ImgPelicula, unaAccion: string): any {
    if (unaAccion === 'eliminar') {
      const url = `${URL_SERVICIOS_MONGODB}/api/imgpeliculas/${imgPelicula._id}`;
      return this.http.delete(url).pipe(
        map(data => {
          return data;
        })
      );
    }

    if (unaAccion === 'insertar') {
      const url = `${URL_SERVICIOS_MONGODB}/api/imgpeliculas`;
      const body = {
        peliculaId: imgPelicula.peliculaId,
      };
      return this.http.post(url, body).pipe(
        map(data => {
          return data;
        })
      );
    }

    if (unaAccion === 'modificar') {
      const url = `${URL_SERVICIOS_MONGODB}/api/imgpeliculas/${imgPelicula._id}`;
      const body = {
        peliculaId: imgPelicula.peliculaId,
      };
      return this.http.put(url, body).pipe(
        map(data => {
          return data;
        })
      );
    }
  }
}
