import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Imagen } from '../../interfaces/imagenes.interface';
import { ImagenesService } from '../../services/imagenes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-imagenes-edit',
  templateUrl: './imagenes-edit.component.html',
  styleUrls: ['./imagenes-edit.component.css']
})
export class ImagenesEditComponent implements OnInit {
  imagen: Imagen = {
    url: '',
    descripcion: ''
  };

  constructor(
    private imagenesService: ImagenesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.imagenesService.getUnaImagen(id).subscribe(
        (data: any) => {
          this.imagen = data.resp;
        },
        (error:any) => {
          console.error(error);
        }
      );
    }
  }

  guardarImagen() {
    const accion = this.imagen._id ? 'modificar' : 'insertar';
    this.imagenesService.crud_Imagenes(this.imagen, accion).subscribe(
      (res: any) => {
        if (res.Ok === true) {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Imagen Guardada',
          });
          this.router.navigate(['/imagenes']);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: res.msg,
          });
        }
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
 