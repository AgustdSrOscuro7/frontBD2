import { Heroe } from './heroe.interface';
import { Pelicula } from './pelicula.interface';

export interface CastingPelicula {
    _id?: string;
    HeroesId: string;
    PeliculasId: string;
    Personaje: string;
    Heroe: Heroe;
    Pelicula: Pelicula;
  }