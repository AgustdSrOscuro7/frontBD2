import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ImgHeroe } from '../interfaces/imgheroe.interface'; // Asegúrate de que la ruta sea correcta
import { URL_SERVICIOS_MONGODB } from '../config/url.servicios';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImgHeroesService {

  constructor(public http: HttpClient) {}

  getImgHeroes(): any {
    const url = `${URL_SERVICIOS_MONGODB}/api/imgheroes`;
    return this.http.get(url).pipe(
      map(data => {
        console.log('DATOS', data);
        return data;
      })
    );
  }

  getUnaImgHeroe(unId: string): any {
    const url = `${URL_SERVICIOS_MONGODB}/api/imgheroes/${unId}`;
    return this.http.get(url).pipe(
      map(data => {
        console.log('DATOS', data);
        return data;
      })
    );
  }

  crud_ImgHeroe(imgHeroe: ImgHeroe, unaAccion: string): any {
    if (unaAccion === 'eliminar') {
      const url = `${URL_SERVICIOS_MONGODB}/api/imgheroes/${imgHeroe._id}`;
      return this.http.delete(url).pipe(
        map(data => {
          return data;
        })
      );
    }

    if (unaAccion === 'insertar') {
      const url = `${URL_SERVICIOS_MONGODB}/api/imgheroes`;
      const body = {
        heroeId: imgHeroe.heroeId,
      };
      return this.http.post(url, body).pipe(
        map(data => {
          return data;
        })
      );
    }

    if (unaAccion === 'modificar') {
      const url = `${URL_SERVICIOS_MONGODB}/api/imgheroes/${imgHeroe._id}`;
      const body = {
        heroeId: imgHeroe.heroeId,
      };
      return this.http.put(url, body).pipe(
        map(data => {
          return data;
        })
      );
    }
  }
}
