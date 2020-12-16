import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUsers } from '../domain/iusers';
import { User } from '../domain/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  data: User[] = [];

  //constructor() { }

  constructor(private _http: HttpClient) { } // Inject HttpClient

  public getAllUsers(pageNumber:number=0, size: number = 10): Observable<User[]> {
    const URL: string = environment.url_base + '/user';

    let params = new HttpParams();
    params = params.append('page', pageNumber.toString());
    params = params.append('size', size.toString());

    return this._http.get<User[]>(URL, {params:params});
  }

  public addUser(p: User): Observable<any> {
    const URL: string = environment.url_base + '/user';
    return this._http.post(URL, p);
    }

  getUserById(id: string): Observable<User> {
      const URL: string = environment.url_base + '/user';
      return  this._http.get<User>(URL + '/' + id);
    }

  deleteUserById(id: string): Observable<any> {
      const URL: string = environment.url_base + '/user';
     return  this._http.delete(URL + '/' + id);
    }

          //Méthode pour le Search dans la navbar
  public getUsersByNomContaining(part: string) : Observable<User[]> {

    const URL: string = environment.url_base + '/user';

    const myparams = new HttpParams().set('namePart', part);
    const myheaders = new HttpHeaders().set('accept', 'application/json'); //Not necessary for our App
    const options = {params : myparams, headers : myheaders};

    return this._http.get<User[]>(URL, options); // Retourne ceci -> cars?namePart=AZERT

  }

  getAuthenticatedUser(id: string): Observable<User> {
    const URL: string = environment.url_base + '/user';
    return  this._http.get<User>(URL + '/' + id);
  }
}
