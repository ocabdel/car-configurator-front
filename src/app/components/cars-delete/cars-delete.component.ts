import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ICar } from 'src/app/domain/icars';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-cars-delete',
  templateUrl: './cars-delete.component.html',
  styleUrls: ['./cars-delete.component.scss']
})
export class CarsDeleteComponent implements OnInit {

  idCar: string;
  car: ICar =  { 'idCar': null, 'marque': null, 'model': null,  'motor': null, 'color': null, 'unitPrice': null, 'reference': null, 'imageURL': null};

  constructor( private _route: Router,
               private _router: ActivatedRoute,
               private _service: CarsService) { }

  ngOnInit() {
    this._router.params.subscribe(
      parametres => {
              this.idCar = parametres['id'];
              this.getCarById(this.idCar);
     },
      error => console.log('ATTENTION - Il y a erreur lors de la navigation vers Delete. Détails ' + error)
    );
   }

  getCarById(id) {
   this._service.getCarById(this.idCar).subscribe(
     resp => this.car = resp
   );
  }

  cancelDelete() {
    this._route.navigate(['/cars']);
    console.log ('Annulation du DELETE et retour à la vue list');
  }

  confirmDelete() {
      this._service.deleteCarById(this.idCar).subscribe(
        resp => {
                   this._route.navigate(['/cars']);
                   console.log ('Confirmation DELETE et retour à la vue list');
               },
        err => console.log(`ATTENTION Il y a eu erreur lors du DELETE, Détails : ${err}`)
      );

  }


}
