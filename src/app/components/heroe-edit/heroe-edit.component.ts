import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MongoDBService } from '../../services/mongo-db.service';
import { Heroe } from '../../interfaces/heroe.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroe-edit',
  templateUrl: './heroe-edit.component.html',
  styleUrls: ['./heroe-edit.component.css']
})
export class HeroeEditComponent implements OnInit {
  heroe: Heroe = {
    _id: '',
    Id: '', // Cambiado de Id a _id
    Nombre: '',
    Bio: '',
    Img: '',
    Aparicion: '',
    Casa: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataBD: MongoDBService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.dataBD.getUnHeroe(id).subscribe((response: Heroe) => {
        this.heroe = response;
        console.log(this.heroe); // Verifica si recibes los datos del héroe en la consola
      }, error => {
        console.error('Error al obtener el héroe:', error);
      });
    } else {
      console.error('El id del héroe no está definido');
    }
  }

  guardarCambios(): void {
    if (this.heroe._id) { // Usar _id en lugar de Id
      this.actualizarHeroe();
    } else {
      this.nuevoHeroe();
    }
  }

  private actualizarHeroe() {
    const id = this.heroe._id; // Obtener el _id del héroe
    if (id) {
      this.dataBD.putHeroe(id, this.heroe).subscribe(() => { // Pasar _id y el objeto heroe
        Swal.fire({
          title: 'Éxito',
          text: 'Héroe actualizado exitosamente',
          icon: 'success',
          timer: 2000,
          timerProgressBar: true
        }).then(() => {
          this.router.navigate(['/heroes']);
        });
      },
      (error: any) => {
        Swal.fire({
          title: 'Error',
          text: 'Error al actualizar el héroe',
          icon: 'error',
          timer: 2000,
          timerProgressBar: true
        });
        console.error('Error al actualizar el héroe:', error);
      });
    } else {
      console.error('El _id del héroe no está definido');
    }
  }

  private nuevoHeroe() {
    this.dataBD.postHeroe(this.heroe).subscribe(() => { // Pasar solo el objeto heroe
      Swal.fire({
        title: 'Éxito',
        text: 'Héroe creado exitosamente',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true
      }).then(() => {
        this.router.navigate(['/heroes']);
      });
    },
    (error: any) => {
      Swal.fire({
        title: 'Error',
        text: 'Error al crear el héroe',
        icon: 'error',
        timer: 2000,
        timerProgressBar: true
      });
      console.error('Error al crear el héroe:', error);
    });
  }
}
