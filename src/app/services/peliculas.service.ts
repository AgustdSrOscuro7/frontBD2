import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pelicula } from '../interfaces/pelicula.interface';
import { URL_SERVICIOS_MONGODB } from '../config/url.servicios';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) { }

  getPeliculas() {
    const url = `${URL_SERVICIOS_MONGODB}/peliculas`;
    return this.http.get<Pelicula[]>(url).pipe(
      map((data) => {
        console.log('DATOS', data);
        return data;
      })
    );
  }

  getUnaPelicula(unId: string) {
    const url = `${URL_SERVICIOS_MONGODB}/peliculas/${unId}`;
    return this.http.get<Pelicula>(url).pipe(
      map((data) => {
        console.log('DATOS', data);
        return data;
      })
    );
  }

  crud_Peliculas(unaPelicula: Pelicula, unaAccion: string) {
    if (unaAccion === 'eliminar') {
      const url = `${URL_SERVICIOS_MONGODB}/peliculas/${unaPelicula.Id}`;
      return this.http.delete(url).pipe(
        map((data) => {
          return data;
        })
      );
    }

    if (unaAccion === 'insertar') {
      const url = `${URL_SERVICIOS_MONGODB}/peliculas`;
      const body = {
        Titulo: unaPelicula.Titulo,
        Descripcion: unaPelicula.Descripcion,
        FechaLanzamiento: unaPelicula.FechaLanzamiento,
        Img: unaPelicula.Img,
        ImgPeliculas: unaPelicula.ImgPeliculas
      };
      return this.http.post(url, body).pipe(map((data) => data));
    }

    if (unaAccion === 'modificar') {
      const url = `${URL_SERVICIOS_MONGODB}/peliculas/${unaPelicula.Id}`;
      const body = {
        Titulo: unaPelicula.Titulo,
        Descripcion: unaPelicula.Descripcion,
        FechaLanzamiento: unaPelicula.FechaLanzamiento,
        Img: unaPelicula.Img,
        ImgPeliculas: unaPelicula.ImgPeliculas
      };
      return this.http.put(url, body).pipe(map((data) => data));
    }

    return null;  // Return a default value if no action matches
  }
}
