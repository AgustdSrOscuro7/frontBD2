import { Heroe } from './heroe.interface';
import { Pelicula } from './pelicula.interface';

export interface Casting {
    _id?: string;
    HeroesId: string;
    PeliculasId: string;
    Personaje: string;
    Hero: Heroe;
    Pelicula: Pelicula;
  }