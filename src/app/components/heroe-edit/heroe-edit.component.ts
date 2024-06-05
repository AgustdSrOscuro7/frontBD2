import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MongoDBService } from '../../services/mongo-db.service';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroes-edit',
  templateUrl: './heroe-edit.component.html',
  styleUrls: ['./heroe-edit.component.css']
})
export class HeroeEditComponent implements OnInit {
  heroForm: FormGroup;
  isNew = true;
  heroId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private mongoDBService: MongoDBService
  ) {
    this.heroForm = this.fb.group({
      Aparicion: ['', Validators.required],
      Bio: ['', Validators.required],
      Casa: ['', Validators.required],
      Img: ['', Validators.required],
      Nombre: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.heroId = this.route.snapshot.paramMap.get('id');
    if (this.heroId) {
      this.isNew = false;
      this.mongoDBService.getUnHeroe(this.heroId).subscribe(
        (hero: Heroe) => {
          this.heroForm.patchValue(hero);
        },
        error => {
          console.error('Error loading hero:', error);
        }
      );
    }
  }

  saveHero(): void {
    if (this.heroForm.invalid) {
      return;
    }

    const formValues: Heroe = this.heroForm.value;

    if (this.isNew) {
      this.mongoDBService.crud_Heroes(formValues, 'insertar').subscribe(
        response => {
          console.log('Hero created:', response);
          this.router.navigate(['/home']); // Redirect to home
        },
        error => {
          console.error('Error creating hero:', error);
        }
      );
    } else if (this.heroId) {
      formValues._id = this.heroId;
      this.mongoDBService.crud_Heroes(formValues, 'modificar').subscribe(
        response => {
          console.log('Hero updated:', response);
          this.router.navigate(['/home']); // Redirect to home
        },
        error => {
          console.error('Error updating hero:', error);
        }
      );
    }
  }

  cancel(): void {
    this.router.navigate(['/home']); // Redirect to home
  }
}
