import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IConfigurations } from 'src/app/domain/iconfigurations';
import { CarsService } from 'src/app/services/cars.service';
import { ConfigurationsService } from 'src/app/services/configurations.service';

@Component({
  selector: 'app-configurations-delete',
  templateUrl: './configurations-delete.component.html',
  styleUrls: ['./configurations-delete.component.scss']
})
export class ConfigurationsDeleteComponent implements OnInit {

  idConfig: string;
  configuration: IConfigurations =  { 'idConfig': null, 'marque': null, 'model': null,
                                      'motor': null, 'color': null, 'namePack': null,
                                      'idUser': null, 'dateConfig': null, 'totalPrice': null,
                                      'status': null};

  constructor( private _route: Router,
               private _router: ActivatedRoute,
               private _service: ConfigurationsService) { }

  ngOnInit(): void {
    this._router.params.subscribe(
      parametres => {
              this.idConfig = parametres['id'];
              this.getConfigurationById(this.idConfig);
     },
      error => console.log('ATTENTION - Il y a erreur lors de la navigation vers Delete. Détails ' + error)
    );
  }

  getConfigurationById(id) {
    this._service.getConfigurationById(this.idConfig).subscribe(
      resp => this.configuration = resp
    );
   }

   cancelDelete() {
     this._route.navigate(['/configurations']);
     console.log ('Annulation du DELETE et retour à la vue list');
   }

   confirmDelete() {
       this._service.deleteConfigurationById(this.idConfig).subscribe(
         resp => {
                    this._route.navigate(['/configurations']);
                    console.log ('Confirmation DELETE et retour à la vue list');
                },
         err => console.log(`ATTENTION Il y a eu erreur lors du DELETE, Détails : ${err}`)
       );

   }

}
