import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IUsers } from 'src/app/domain/iusers';
import { User } from 'src/app/domain/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-delete',
  templateUrl: './users-delete.component.html',
  styleUrls: ['./users-delete.component.scss']
})
export class UsersDeleteComponent implements OnInit {

  idUser: string;
  user: User =  { 'idUser': null, 'nom': null, 'prenom': null, 'email': null,
                    'username': null, 'password': null};

  constructor(private _route: Router,
    private _router: ActivatedRoute,
    private _service: UsersService) { }


  ngOnInit(): void {

    this._router.params.subscribe(
      parametres => {
              this.idUser = parametres['id'];
              this.getUserById(this.idUser);
     },
      error => console.log('ATTENTION - Il y a erreur lors de la navigation vers Delete. Détails ' + error)
    );
  }

  getUserById(id) {
    this._service.getUserById(this.idUser).subscribe(
      resp => this.user = resp
    );
   }

   cancelDelete() {
     this._route.navigate(['/user']);
     console.log ('Annulation du DELETE et retour à la vue list');
   }

   confirmDelete() {
       this._service.deleteUserById(this.idUser).subscribe(
         resp => {
                    this._route.navigate(['/user']);
                    console.log ('Confirmation DELETE et retour à la vue list');
                },
         err => console.log(`ATTENTION Il y a eu erreur lors du DELETE, Détails : ${err}`)
       );

   }

}
