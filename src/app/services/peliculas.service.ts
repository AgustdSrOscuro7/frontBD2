import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pelicula } from '../interfaces/pelicula.interface';
import { URL_SERVICIOS_MONGODB } from '../config/url.servicios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) { }

  getPeliculas(): Observable<Pelicula[]> {
    const url = `${URL_SERVICIOS_MONGODB}/api/peliculas`;

    return this.http.get<any>(url).pipe(
      map(response => {
        console.log('DATOS', response);
        return response.peliculas; // Here we adjust to return only the array of movies
      })
    );
  }

  getUnaPelicula(unId: string): Observable<Pelicula> {
    const url = `${URL_SERVICIOS_MONGODB}/api/peliculas/${unId}`;

    return this.http.get<Pelicula>(url).pipe(
      map((data: Pelicula) => {
        console.log('DATOS', data);
        return data;
      })
    );
  }

  // Agregar console.log para depurar la solicitud de modificación
  crud_Peliculas(unaPelicula: Pelicula, unaAccion: string): Observable<any> {
    if (unaAccion === 'eliminar') {
      const url = `${URL_SERVICIOS_MONGODB}/api/peliculas/${unaPelicula._id}`;
      return this.http.delete(url).pipe(
        map((data: any) => {
          return data;
        })
      );
    }

    if (unaAccion === 'insertar') {
      const url = `${URL_SERVICIOS_MONGODB}/api/peliculas`;
      const body = {
        Descripcion: unaPelicula.Descripcion,
        Img: unaPelicula.Img,
        FechaLanzamiento: unaPelicula.FechaLanzamiento,
        Titulo: unaPelicula.Titulo
      };

      // Imprimir los datos antes de enviar la solicitud
      console.log('Datos de la película a insertar:', body);

      return this.http.post(url, body).pipe(
        map((data: any) => {
          console.log('Película insertada:', data);
          return data;
        })
      );
    }

    if (unaAccion === 'modificar') {
      const url = `${URL_SERVICIOS_MONGODB}/api/peliculas/${unaPelicula._id}`;
      const body = {
        Descripcion: unaPelicula.Descripcion,
        FechaLanzamiento: unaPelicula.FechaLanzamiento,
        Img: unaPelicula.Img,
        Titulo: unaPelicula.Titulo
      };

      // Imprimir los datos antes de enviar la solicitud
      console.log('Datos de la película a modificar:', body);

      return this.http.put(url, body).pipe(
        map((data: any) => {
          console.log('Película modificada:', data);
          return data;
        })
      );
    }

    throw new Error(`Acción desconocida': ${unaAccion}`);
  }
}
