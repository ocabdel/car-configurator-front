import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICar } from 'src/app/domain/icars';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-cars-add',
  templateUrl: './cars-add.component.html',
  styleUrls: ['./cars-add.component.scss']
})
export class CarsAddComponent implements OnInit {

    form: FormGroup | undefined;

    constructor(private fb: FormBuilder,
                private service: CarsService,
                private router: Router)
                {       }

    ngOnInit() {

      this.form = this.fb.group({

        //idCar : new FormControl('', Validators.required),
        //marque: ['', Validators.required],
        //model: ['', Validators.required],
        //motor: ['', Validators.required],
        //color: ['', Validators.required],
        //reference: ['', Validators.required],
        //unitPrice: ['', Validators.required],
        //imageURL: ['', Validators.required]

          //idCar : new FormControl('', Validators.required),
          marque: new FormControl('Marque', Validators.required),
          model: new FormControl('Model', Validators.required),
          motor: new FormControl('Motor', Validators.required),
          color: new FormControl('Couleur', Validators.required),
          reference: new FormControl('Reference', Validators.required),
          unitPrice: new FormControl('12222.99', [Validators.required,
            Validators.pattern('[+]?[0-9.]+')]),
          imageURL:
            new FormControl('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Pscontroller-icon.svg/256px-Ps-controller-icon.svg.png'),

       });
    }

    addCar(prod: ICar) {

      this.service
      .addCar(prod)
      .subscribe( res => {

        console.log('Ajout avec succès du Car : ' + res );
        this.router.navigate(['/cars']);
        });

    }

}
