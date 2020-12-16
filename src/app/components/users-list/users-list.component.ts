import { Component, OnInit } from '@angular/core';
import { IUsers } from 'src/app/domain/iusers';

import { tap, switchMap } from 'rxjs/operators';
import jspdf from 'jspdf';
import autoTable from 'jspdf-autotable';
import { SearchService } from 'src/app/services/search.service';
import { UsersService } from 'src/app/services/users.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/domain/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  totalElements: number = 0;   // Nombre total d elements
  page: number = 1;   // Page courante
  pageSize: number = 10; // Pour avoir un 10 éléments au max par page

  data : User[] = [];

  constructor(private _service: UsersService,
    private _search: SearchService,
    private service: AuthenticationService) { }

  ngOnInit(): void {

    this.loadData(1, this.pageSize);  // Initial load = the first page is loaded
    // NgBootstrap starts counting pages from 1
    // PageRequest(JPA) starts counting pages from 0

   /* this._service.getAllPacks().subscribe(
      response => this.data = response,
      erreur => console.log(`Attention, il y a une l'erreur: `+ erreur)
    );
    */

   this._search.currentMessage
   .pipe(switchMap (    // Using high order RXJS operators with the swithMap
     // c'est un pipeline d'opérators inter-dépendants !
     item => this._service.getUsersByNomContaining(item)
     ))
   .subscribe(
     result => this.data = result,
     err => console.log(`Attention, il y a l'erreur : ` + err)
   );

  }

   // This is the Event handler for page change
   loadPageFromServer(pagetToLoad:number ) {
    this.loadData(pagetToLoad, this.pageSize);

  }

  loadData(page:number, size:number) : void {
    this._service.getAllUsers(page -1, size). subscribe(
      resp => {
         this.data = resp['content'];
         this.totalElements = resp['totalElements'];
         this.pageSize = resp['size'];
        },
      err => console.log('ATTENTION, il y a eu l\'erreur : '+err)
    );
  }

    // Afficher Login ou Logout en fonction de l'état de connexion de l'utilisateur
  // Ajouter des méthodes isLoggedIn() et getJwtSubjet()
  isLoggedIn(): boolean {
    return this.service.isLoggedIn();
  }

  getJwtSubjet(): string {
    return this.service.getJwtSubjet();
  }

  doGeneratePDF_FromTable() {
    const doc = new jspdf('p', 'pt', 'a4');
    autoTable(doc, { html: '#my-table' })
    doc.save('my_pdf_doc_from_table.pdf');
  }

}
