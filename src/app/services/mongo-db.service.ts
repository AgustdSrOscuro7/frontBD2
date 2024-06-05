import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';
import { URL_SERVICIOS_MONGODB } from '../config/url.servicios';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MongoDBService {

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<any> {
    const url = `${URL_SERVICIOS_MONGODB}/api/heroes`;
    return this.http.get(url).pipe(map(data => {
      console.log('DATOS', data);
      return data;
    }));
  }

  getUnHeroe(unId: string): Observable<any> {
    const url = `${URL_SERVICIOS_MONGODB}/api/heroes/${unId}`;
    return this.http.get(url).pipe(map(data => {
      console.log('DATOS', data);
      return data;
    }));
  }

  crud_Heroes(unHeroe: Heroe, unaAccion: string): Observable<any> {
    const url = `${URL_SERVICIOS_MONGODB}/api/heroes`;

    if (unaAccion === 'insertar') {
      return this.http.post(url, unHeroe).pipe(map(data => data));
    } else if (unaAccion === 'modificar') {
      const updateUrl = `${url}/${unHeroe._id}`;
      return this.http.put(updateUrl, unHeroe).pipe(map(data => data));
    } else if (unaAccion === 'eliminar') {
      const deleteUrl = `${url}/${unHeroe._id}`;
      return this.http.delete(deleteUrl).pipe(map(data => data));
    } else {
      // Handle the case where `unaAccion` is not recognized
      throw new Error(`Unknown action: ${unaAccion}`);
    }
  }

  borrarHeroe(id: string): Observable<any> {
    const url = `${URL_SERVICIOS_MONGODB}/api/heroes/${id}`;
    return this.http.delete(url).pipe(map(data => data));
  }
}
