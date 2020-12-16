import { Component, OnInit } from '@angular/core';
import { IConfigurations } from 'src/app/domain/iconfigurations';
import { ConfigurationsService } from 'src/app/services/configurations.service';
import { tap, switchMap } from 'rxjs/operators';
import jspdf from 'jspdf';
import autoTable from 'jspdf-autotable';
import { SearchService } from 'src/app/services/search.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-configurations-list',
  templateUrl: './configurations-list.component.html',
  styleUrls: ['./configurations-list.component.scss']
})
export class ConfigurationsListComponent implements OnInit {

  totalElements: number = 0;   // Nombre total d elements
  page: number = 1;   // Page courante
  pageSize: number = 10; // Pour avoir un 10 éléments au max par page

  data: IConfigurations[];

  constructor(private _service: ConfigurationsService,
    private _search: SearchService,
    private service: AuthenticationService)
    { }

  ngOnInit(): void {


    this.loadData(1, this.pageSize);  // Initial load = the first page is loaded
                                      // NgBootstrap starts counting pages from 1
                                      // PageRequest(JPA) starts counting pages from 0

   /* this._service.getAllConfigurations().subscribe(
      response => this.data = response,
      erreur => console.log(`Attention, il y a une l'erreur: `+ erreur)
    ); */

    this._search.currentMessage
     .pipe(switchMap (    // Using high order RXJS operators with the swithMap
       // c'est un pipeline d'opérators inter-dépendants !
       item => this._service.getConfigurationsByStatusContaining(item)
       ))
     .subscribe(
       result => this.data = result,
       err => console.log(`Attention, il y a l'erreur : ` + err)
     );

     //This part of code works too (vs using SwitchMag above)----------------
    //.subscribe(
      //result =>  {
      //  let filtre = result;
      //  this._service.getConfigurationsByStatusContaining(filtre).subscribe(
      //    result2 => this.data = result2,
      //    err => console.log(`Attention, il y a l'erreur  dans l invocation de getConfigurationssByMarqueContaining: ` + err)
      //  );
      //},
      //err => console.log(`Attention, il y a l'erreur  dans l'invocation de SearchSrvice: ` + err)
    //);
    // -- ---------------------------------------------------------------------

  }

    // This is the Event handler for page change
  loadPageFromServer(pagetToLoad:number ) {
      this.loadData(pagetToLoad, this.pageSize);

    }

  loadData(page:number, size:number) : void {
      this._service.getAllConfigurations(page -1, size). subscribe(
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
