import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationsListGuard implements CanActivate {
 /* canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  } */

  constructor (private service: AuthenticationService,
    private router: Router) {
    }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {

      if (!this.service.isLoggedIn()) {

        // not logged in, so redirect to login page with the return url
        this.router.navigate(['/login'],

        { queryParams: { returnUrl: state.url }});

        return false;
      }
      return true;
    }

}
