import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CastingPelicula } from '../interfaces/castingpelicula.interface';
import { URL_SERVICIOS_MONGODB } from '../config/url.servicios';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CastingPeliculaService {

  constructor(
    public http: HttpClient) { }

  getCastingPelicula(): any {
    let url = `${URL_SERVICIOS_MONGODB}/api/casting`;

    return this.http.get(url).pipe(
      map((data) => {
        console.log('DATOS', data);
        return data;
      })
    );
  }

  getUnCastingPelicula(unId:string): any{
    let url = `${URL_SERVICIOS_MONGODB}/api/casting/${unId}`;

    return this.http.get(url).pipe(
      map((data) => {
        console.log('DATOS', data);
        return data;
      })
    );
  }

  crud_CastingPelicula(unCasting: CastingPelicula, unaAccion: string):any {
    //console.log(unExpediente);

    if (unaAccion === 'eliminar') {
      let parametros2 = new HttpParams();

      let url = `${URL_SERVICIOS_MONGODB}/api/casting/${unCasting._id}`;

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
      let url = URL_SERVICIOS_MONGODB+ '/api/';

      // Begin assigning parameters
      parametros2 = parametros2.append('HeroesId',unCasting.HeroesId);
      parametros2 = parametros2.append('PeliculasId',unCasting.PeliculasId);
      parametros2 = parametros2.append('Personaje',unCasting.Personaje);

      const body = {
        HeroesId:unCasting.HeroesId,
        PeliculasId:unCasting.PeliculasId,
        Personaje:unCasting.Personaje,
        Heroe:unCasting.Heroe,
        Pelicula:unCasting.Pelicula
      };

      return this.http.post(url, body).pipe(map((data) => data));
    }

    if (unaAccion === 'modificar') {
      let parametros = new HttpParams();

      let url = `${URL_SERVICIOS_MONGODB}/api/casting/${unCasting._id}`;

      //let url = URL_SERVICIOS_MONGODB + '/aPunaImagens';

      // Begin assigning parameters
      parametros = parametros.append('HeroesId',unCasting.HeroesId);
      parametros = parametros.append('PeliculasId',unCasting.PeliculasId);
      parametros = parametros.append('Personaje',unCasting.Personaje);
      
      const body = {
        HeroesId:unCasting.HeroesId,
        PeliculasId:unCasting.PeliculasId,
        Personaje:unCasting.Personaje,
        Heroe:unCasting.Heroe,
        Pelicula:unCasting.Pelicula
      };

      //console.log(parametros);
      return this.http.put(url, body).pipe(map((data) => data));
    }
  }


  

}


