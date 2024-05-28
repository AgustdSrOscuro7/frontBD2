import { Component } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';
import { MongoDBService } from '../../services/mongo-db.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.css'
})
export class HeroesListComponent {
  Heroes!: Heroe[];

  unResultado!:any;
  unaAccion: string = 'Mensaje';
  unMensaje: string = '';


  constructor(
    private dataBD: MongoDBService,
    private router: Router,
  ) {
    
  }

  ngOnInit(){
    this.cargarHeroesBD();
  }

  async cargarHeroesBD() {
    //this.cargando = true;
    await this.dataBD
    .getHeroes()
    .toPromise()
    .then((data:any) =>{
      this.Heroes = data.resp;
      console.log(this.Heroes)
    });

    /*
      .getHeroes()
      .toPromise()
      .then((data: any) => {
        this.heroes = data.resp;

        console.log('DATOSNUEVOS', this.heroes);

        this.cargando = false;
      });
      */
  }

  editarHeroe(unIdHeroe:any){
    this.router.navigate(['/heroeedit', unIdHeroe]);
  }

  eliminarHeroe(unHeroe: any) {
    //console.log(this.unaDivision);
    this.dataBD.crud_Heroes(unHeroe, 'eliminar').subscribe(
      (res: any) => {
        this.unResultado = res;

        //console.log(this.unResultado);
        if (this.unResultado.Ok == true) {

           Swal.fire({
            icon: 'info',
            title: 'Information',
            text: 'Heroe Eliminado',
          });

          this.unaAccion = 'Mensaje:';
          this.unMensaje = 'Heroe Eliminado';
          setTimeout(() => (this.unMensaje = ''), 3000);


          this.cargarHeroesBD() ;

        } else {
          Swal.fire({
            icon: 'info',
            title: 'Information',
            text: this.unResultado.msg,
          });
    

          this.unaAccion = 'Error:';
          this.unMensaje = this.unResultado.msg;
          setTimeout(() => (this.unMensaje = ''), 3000);
        }
      }
      ,(error:any) => {
        console.error(error)
      }
    );
  }


  editarFotos(unHeroe:any){

  }


}
