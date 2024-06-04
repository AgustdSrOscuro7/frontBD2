import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Imagen } from '../interfaces/imagenes.interface';
import { URL_SERVICIOS_MONGODB } from '../config/url.servicios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  constructor(private http: HttpClient) { }

  getImagenes(): Observable<Imagen[]> {
    const url = `${URL_SERVICIOS_MONGODB}/api/imagenes`;

    return this.http.get<any>(url).pipe(
      map(response => {
        console.log('DATOS', response);
        return response.imagenes; // Ajustar para devolver solo el array de imágenes
      })
    );
  }

  getUnaImagen(unId: string): Observable<Imagen> {
    const url = `${URL_SERVICIOS_MONGODB}/api/imagenes/${unId}`;

    return this.http.get<Imagen>(url).pipe(
      map((data: Imagen) => {
        console.log('DATOS', data);
        return data;
      })
    );
  }

  crud_Imagenes(unaImagen: Imagen, unaAccion: string): Observable<any> {
    if (unaAccion === 'eliminar') {
      const url = `${URL_SERVICIOS_MONGODB}/api/imagenes/${unaImagen._id}`;
      return this.http.delete(url).pipe(
        map((data: any) => {
          return data;
        })
      );
    }

    if (unaAccion === 'insertar') {
      const url = `${URL_SERVICIOS_MONGODB}/api/imagenes`;
      const body = {
        Descripcion: unaImagen.Descripcion,
        Url: unaImagen.Url
      };

      return this.http.post(url, body).pipe(
        map((data: any) => {
          return data;
        })
      );
    }

    if (unaAccion === 'modificar') {
      const url = `${URL_SERVICIOS_MONGODB}/api/imagenes/${unaImagen._id}`;
      const body = {
        Descripcion: unaImagen.Descripcion,
        Url: unaImagen.Url
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
