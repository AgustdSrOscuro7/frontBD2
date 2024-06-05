import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  currentYear: number = new Date().getFullYear();
  aboutInfo: string = "Este proyecto final es para la materia de base de datos, desarrollado por Daniel García y Valeria Rudas.";
}
