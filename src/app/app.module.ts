import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { HeroeEditComponent } from './components/heroe-edit/heroe-edit.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'; // Combine FormsModule and ReactiveFormsModule imports

@NgModule({
  declarations: [
    AppComponent,
    HeroesListComponent,
    HeroeEditComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Aquí involucro el HttpClientModule para realizar las peticiones RESTFUL
    HttpClientModule,
     
    // Aquí involucramos el FormsModule y ReactiveFormsModule
    FormsModule,
    ReactiveFormsModule  // Añadir ReactiveFormsModule a imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
