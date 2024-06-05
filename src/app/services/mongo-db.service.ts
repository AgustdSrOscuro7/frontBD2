import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Heroe } from '../interfaces/heroe.interface';
import { URL_SERVICIOS_MONGODB } from '../config/url.servicios';

@Injectable({
  providedIn: 'root'
})
export class MongoDBService {

  constructor(private http: HttpClient) { }

  getHeroes() {
    const url = `${URL_SERVICIOS_MONGODB}/api/heroes`;
    return this.http.get(url).pipe(
      catchError(error => {
        console.error('Error al obtener los héroes:', error);
        return throwError(error);
      })
    );
  }

  getUnHeroe(unId: string) {
    const url = `${URL_SERVICIOS_MONGODB}/api/heroes/${unId}`;
    return this.http.get<Heroe>(url).pipe( // Especificar el tipo de respuesta como Heroe
      catchError(error => {
        console.error('Error al obtener el héroe:', error);
        return throwError(error);
      })
    );
  }

  putHeroe(id: string, heroe: Heroe) {
    const url = `${URL_SERVICIOS_MONGODB}/api/heroes/${id}`;
    return this.http.put(url, heroe).pipe(
      catchError(error => {
        console.error('Error al actualizar el héroe:', error);
        return throwError(error);
      })
    );
  }

  postHeroe(heroe: Heroe) {
    const url = `${URL_SERVICIOS_MONGODB}/api/heroes`;
    return this.http.post(url, heroe).pipe(
      catchError(error => {
        console.error('Error al crear el héroe:', error);
        return throwError(error);
      })
    );
  }

  deleteHeroe(id: string) {
    const url = `${URL_SERVICIOS_MONGODB}/api/heroes/${id}`;
    return this.http.delete(url).pipe(
      catchError(error => {
        console.error('Error al eliminar el héroe:', error);
        return throwError(error);
      })
    );
  }
}
