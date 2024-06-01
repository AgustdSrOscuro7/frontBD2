import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { HeroeEditComponent } from './components/heroe-edit/heroe-edit.component';
import { ImagenesListComponent } from './components/imagenes-list/imagenes-list.component';
import { ImagenesEditComponent } from './components/imagenes-edit/imagenes-edit.component';
import { PeliculasListComponent} from './components/peliculas-list/peliculas-list.component';

const routes: Routes = [
  { path: 'hogar', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'heroes', component: HeroesListComponent},
  { path: 'heroeedit/:idheroe', component: HeroeEditComponent },
  { path: 'imagenes', component: ImagenesListComponent},
  { path: 'imagenesedit/:idimagen', component: ImagenesEditComponent},
  { path: 'peliculas', component: PeliculasListComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
