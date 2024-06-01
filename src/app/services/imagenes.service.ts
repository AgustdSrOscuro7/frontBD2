import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Imagen } from '../interfaces/imagenes.interface';
import { URL_SERVICIOS_MONGODB } from '../config/url.servicios';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  constructor(
    public http: HttpClient) { }

  getImagenes(): any {
    let url = `${URL_SERVICIOS_MONGODB}/api/imagenes`;

    return this.http.get(url).pipe(
      map((data) => {
        console.log('DATOS', data);
        return data;
      })
    );
  }

  getUnaImagen(unId:string): any{
    let url = `${URL_SERVICIOS_MONGODB}/api/imagenes/${unId}`;

    return this.http.get(url).pipe(
      map((data) => {
        console.log('DATOS', data);
        return data;
      })
    );
  }

  crud_Imagenes(unaImagen: Imagen, unaAccion: string):any {
    //console.log(unExpediente);

    if (unaAccion === 'eliminar') {
      let parametros2 = new HttpParams();

      let url = `${URL_SERVICIOS_MONGODB}/api/imagenes/${unaImagen._id}`;

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
      let url = URL_SERVICIOS_MONGODB+ '/api/imagenes';

      // Begin assigning parameters
      parametros2 = parametros2.append('Url',unaImagen.url);
      parametros2 = parametros2.append('Descripcion',unaImagen.descripcion);
      

      const body = {
        Url:unaImagen.url,
        Descripcion:unaImagen.descripcion,
      };

      return this.http.post(url, body).pipe(map((data) => data));
    }

    if (unaAccion === 'modificar') {
      let parametros = new HttpParams();

      let url = `${URL_SERVICIOS_MONGODB}/api/imagenes/${unaImagen._id}`;

      //let url = URL_SERVICIOS_MONGODB + '/aPunaImagens';

      // Begin assigning parameters
      parametros = parametros.append('Url',unaImagen.url);
      parametros = parametros.append('Descripcion',unaImagen.descripcion);
      
      const body = {
        Url:unaImagen.url,
        Descripcion:unaImagen.descripcion,
      };

      //console.log(parametros);
      return this.http.put(url, body).pipe(map((data) => data));
    }
  }


  

}


