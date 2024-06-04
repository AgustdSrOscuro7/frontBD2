import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';
import { URL_SERVICIOS_MONGODB } from '../config/url.servicios';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MongoDBService {

  constructor(
    public http: HttpClient) { }

  getHeroes(): any {
    let url = `${URL_SERVICIOS_MONGODB}/api/heroes`;

    return this.http.get(url).pipe(
      map((data) => {
        console.log('DATOS', data);
        return data;
      })
    );
  }

  getUnHeroe(unId:string): any{
    let url = `${URL_SERVICIOS_MONGODB}/api/heroes/${unId}`;

    return this.http.get(url).pipe(
      map((data) => {
        console.log('DATOS', data);
        return data;
      })
    );
  }

  crud_Heroes(unHeroe: Heroe, unaAccion: string):any {
    //console.log(unExpediente);

    if (unaAccion === 'eliminar') {
      let parametros2 = new HttpParams();

      let url = `${URL_SERVICIOS_MONGODB}/api/heroes/${unHeroe._id}`;

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
      let url = URL_SERVICIOS_MONGODB+ '/api/heroes';

      // Begin assigning parameters
      parametros2 = parametros2.append('Aparicion',unHeroe.Aparicion);
      parametros2 = parametros2.append('Bio',unHeroe.Bio);
      parametros2 = parametros2.append('Casa',unHeroe.Casa);
      parametros2 = parametros2.append('Img',unHeroe.Img);
      parametros2 = parametros2.append('Nombre',unHeroe.Nombre);

      const body = {
        Aparicion:unHeroe.Aparicion,
        bio:unHeroe.Bio,
        casa:unHeroe.Casa,
        img:unHeroe.Img,
        nombre:unHeroe.Nombre
      };

      return this.http.post(url, body).pipe(map((data) => data));
    }

    if (unaAccion === 'modificar') {
      let parametros = new HttpParams();

      let url = `${URL_SERVICIOS_MONGODB}/api/heroes/${unHeroe._id}`;

      //let url = URL_SERVICIOS_MONGODB + '/heroes';

      // Begin assigning parameters
      parametros = parametros.append('Aparicion',unHeroe.Aparicion);
      parametros = parametros.append('bio',unHeroe.Bio);
      parametros = parametros.append('casa',unHeroe.Casa);
      parametros = parametros.append('img',unHeroe.Img);
      parametros = parametros.append('nombre',unHeroe.Nombre);

      const body = {
        Aparicion:unHeroe.Aparicion,
        bio:unHeroe.Bio,
        casa:unHeroe.Casa,
        img:unHeroe.Img,
        nombre:unHeroe.Nombre
      };

      console.log(parametros);
      return this.http.put(url, body).pipe(map((data) => data));
    }
  }


  

}


