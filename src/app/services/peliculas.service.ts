import { HttpClient, HttpParams } from '@angular/common/http';
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
        return response.peliculas;  // Aquí ajustamos para devolver solo el array de películas
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
        Titulo: unaPelicula.Titulo,
        Descripcion: unaPelicula.Descripcion,
        Img: unaPelicula.Img,
        FechaLanzamiento: unaPelicula.FechaLanzamiento
      };

      return this.http.post(url, body).pipe(
        map((data: any) => {
          return data;
        })
      );
    }

    if (unaAccion === 'modificar') {
      const url = `${URL_SERVICIOS_MONGODB}/api/peliculas/${unaPelicula._id}`;
      const body = {
        Titulo: unaPelicula.Titulo,
        Descripcion: unaPelicula.Descripcion,
        Img: unaPelicula.Img,
        FechaLanzamiento: unaPelicula.FechaLanzamiento
      };

      return this.http.put(url, body).pipe(
        map((data: any) => {
          return data;
        })
      );
    }

    throw new Error(`Acción desconocida: ${unaAccion}`);
  }
}
