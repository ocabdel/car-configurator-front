import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IPacks } from 'src/app/domain/ipacks';
import { PacksService } from 'src/app/services/packs.service';

@Component({
  selector: 'app-packs-delete',
  templateUrl: './packs-delete.component.html',
  styleUrls: ['./packs-delete.component.scss']
})
export class PacksDeleteComponent implements OnInit {

  idPack: string;
  pack: IPacks =  { 'idPack': null, 'namePack': null, 'reference': null, 'unitPrice': null, 'imageURL': null};

  constructor(private _route: Router,
    private _router: ActivatedRoute,
    private _service: PacksService) { }

  ngOnInit(): void {

    this._router.params.subscribe(
      parametres => {
              this.idPack = parametres['id'];
              this.getPackById(this.idPack);
     },
      error => console.log('ATTENTION - Il y a erreur lors de la navigation vers Delete. Détails ' + error)
    );
  }

  getPackById(id) {
    this._service.getPackById(this.idPack).subscribe(
      resp => this.pack = resp
    );
   }

   cancelDelete() {
     this._route.navigate(['/packs']);
     console.log ('Annulation du DELETE et retour à la vue list');
   }

   confirmDelete() {
       this._service.deletePackById(this.idPack).subscribe(
         resp => {
                    this._route.navigate(['/packs']);
                    console.log ('Confirmation DELETE et retour à la vue list');
                },
         err => console.log(`ATTENTION Il y a eu erreur lors du DELETE, Détails : ${err}`)
       );

   }

}
