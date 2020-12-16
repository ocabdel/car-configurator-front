import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent implements OnInit {

  data: string = '';
  isCollapsed: boolean = false;

  constructor( //private cart: CartService,
                private search: SearchService,
                private service: AuthenticationService,
                private router: Router)
                {

                }

  ngOnInit(): void {
      this.search.currentMessage.subscribe(message => this.data = message);
      }

  ngOnChanges() {
      this.search.changeMessage(`From Sibling : ${this.data}`);
      }

  envoyerChangement() {
      this.search.changeMessage(this.data);
      }

      // Afficher Login ou Logout en fonction de l'état de connexion de l'utilisateur
      // Ajouter des méthodes isLoggedIn() et getJwtSubjet()
  isLoggedIn(): boolean {
      return this.service.isLoggedIn();
      }

  getJwtSubjet(): string {
      return this.service.getJwtSubjet();
      }

  //logout() {
    //  this.service.logout();
    //  this.router.navigate(['/welcome']);
    //  }

  }
