import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pelicula } from '../interfaces/pelicula.interface';
import { URL_SERVICIOS_MONGODB } from '../config/url.servicios';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(
    public http: HttpClient) { }

  getPeliculas(): any {
    let url = `${URL_SERVICIOS_MONGODB}/api/peliculas`;

    return this.http.get(url).pipe(
      map((data) => {
        console.log('DATOS', data);
        return data;
      })
    );
  }

  getUnaPelicula(unId:string): any{
    let url = `${URL_SERVICIOS_MONGODB}/api/peliculas/${unId}`;

    return this.http.get(url).pipe(
      map((data) => {
        console.log('DATOS', data);
        return data;
      })
    );
  }

  crud_Peliculas(unaPelicula: Pelicula, unaAccion: string):any {
    //console.log(unExpediente);

    if (unaAccion === 'eliminar') {
      let parametros2 = new HttpParams();

      let url = `${URL_SERVICIOS_MONGODB}/api/peliculas/${unaPelicula._id}`;

      return this.http.delete(url).pipe(
        map((data) => {
          return data;
        })
      );
    }

    /*
    nombre: string;
    bio: string;
    img: string;
    aparicion: string;
    casa: string;
    _id?: string;
    */
    if (unaAccion === 'insertar') {
      let parametros2 = new HttpParams();
      let url = URL_SERVICIOS_MONGODB+ '/api/peliculas';

      // Begin assigning parameters
      parametros2 = parametros2.append('Titulo',unaPelicula.Titulo);
      parametros2 = parametros2.append('Descripcion',unaPelicula.Descripcion);
      parametros2 = parametros2.append('Img',unaPelicula.Img);
      parametros2 = parametros2.append('FechaLanzamiento',unaPelicula.FechaLanzamiento);

      const body = {
        Titulo:unaPelicula.Titulo,
        Descripcion:unaPelicula.Descripcion,
        Img:unaPelicula.Img,
        FechaLanzamiento:unaPelicula.FechaLanzamiento
      };

      return this.http.post(url, body).pipe(map((data) => data));
    }

    if (unaAccion === 'modificar') {
      let parametros = new HttpParams();

      let url = `${URL_SERVICIOS_MONGODB}/api/peliculas/${unaPelicula._id}`;

      //let url = URL_SERVICIOS_MONGODB + '/aPunaPeliculas';

      // Begin assigning parameters
      parametros = parametros.append('Titulo',unaPelicula.Titulo);
      parametros = parametros.append('Descripcion',unaPelicula.Descripcion);
      parametros = parametros.append('Img',unaPelicula.Img);
      parametros = parametros.append('FechaLanzamiento',unaPelicula.FechaLanzamiento);
      
      const body = {
        Titulo:unaPelicula.Titulo,
        Descripcion:unaPelicula.Descripcion,
        Img:unaPelicula.Img,
        FechaLanzamiento:unaPelicula.FechaLanzamiento
      };

      //console.log(parametros);
      return this.http.put(url, body).pipe(map((data) => data));
    }
  }


  

}


