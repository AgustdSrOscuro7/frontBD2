import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';
import { MongoDBService } from '../../services/mongo-db.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {
  Heroes: Heroe[] = [];
  unResultado: any;
  unaAccion: string = 'Mensaje';
  unMensaje: string = '';

  constructor(
    private dataBD: MongoDBService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cargarHeroesBD();
  }

  cargarHeroesBD() {
    this.dataBD.getHeroes().subscribe(
      (data: any) => {
        this.Heroes = data;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  editarHeroe(unIdHeroe: any) {
    this.router.navigate(['/heroeedit', unIdHeroe]);
  }

  eliminarHeroe(idHeroe: string | undefined) {
    if (!idHeroe) {
      console.error('El ID del héroe es indefinido.');
      return;
    }
  
    if (confirm('¿Estás seguro de que deseas eliminar este héroe?')) {
      this.dataBD.borrarHeroe(idHeroe).subscribe(
        (res: any) => {
          console.log(res);
          // Actualizar la lista de héroes después de eliminar uno
          this.cargarHeroesBD();
        },
        (error: any) => {
          console.error(error);
          // Manejar errores de eliminación
          alert('Hubo un problema al intentar eliminar el héroe.');
        }
      );
    }
  }
  
  editarFotos(unHeroe: any) {
    // Código para editar fotos de un héroe
  }
}
