import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICar } from '../domain/icars';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  //constructor() { }

  constructor(private _http: HttpClient) { } // Inject HttpClient

  public getAllCars(pageNumber:number=0, size: number = 10): Observable<ICar[]> {
    const URL: string = environment.url_base + '/cars';

    let params = new HttpParams();
    params = params.append('page', pageNumber.toString());
    params = params.append('size', size.toString());

    return this._http.get<ICar[]>(URL, {params:params});
  }

  public addCar(p: ICar): Observable<any> {
    const URL: string = environment.url_base + '/cars';
    return this._http.post(URL, p);
    }

    getCarById(id: string): Observable<ICar> {
      const URL: string = environment.url_base + '/cars';
      return  this._http.get<ICar>(URL + '/' + id);
    }

    deleteCarById(id: string): Observable<any> {
      const URL: string = environment.url_base + '/cars';
     return  this._http.delete(URL + '/' + id);
    }

      //Méthode pour le Search dans la navbar
  public getCarsByMarqueContaining(part: string) : Observable<ICar[]> {

    const URL: string = environment.url_base + '/cars';

    const myparams = new HttpParams().set('namePart', part);
    const myheaders = new HttpHeaders().set('accept', 'application/json'); //Not necessary for our App
    const options = {params : myparams, headers : myheaders};

    return this._http.get<ICar[]>(URL, options); // Retourne ceci -> cars?namePart=AZERT

  }

}
