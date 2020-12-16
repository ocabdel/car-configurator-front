import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICar } from '../domain/icars';
import { IConfigurations } from '../domain/iconfigurations';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationsService {

    //constructor() { }

    constructor(private _http: HttpClient) { } // Inject HttpClient

    public getAllConfigurations(pageNumber:number=0, size: number = 10): Observable<IConfigurations[]> {
      const URL: string = environment.url_base + '/configurations';

      let params = new HttpParams();
      params = params.append('page', pageNumber.toString());
      params = params.append('size', size.toString());

      return this._http.get<IConfigurations[]>(URL, {params:params});
    }

    public addConfiguration(p: IConfigurations): Observable<any> {
      const URL: string = environment.url_base + '/configurations';
      return this._http.post(URL, p);
      }

      getConfigurationById(id: string): Observable<IConfigurations> {
        const URL: string = environment.url_base + '/configurations';
        return  this._http.get<IConfigurations>(URL + '/' + id);
      }

      deleteConfigurationById(id: string): Observable<any> {
        const URL: string = environment.url_base + '/configurations';
       return  this._http.delete(URL + '/' + id);
      }

      //Méthode pour le Search dans la navbar
      public getConfigurationsByStatusContaining(part: string) : Observable<IConfigurations[]> {

      const URL: string = environment.url_base + '/configurations';

      const myparams = new HttpParams().set('namePart', part);
      const myheaders = new HttpHeaders().set('accept', 'application/json'); //Not necessary for our App
      const options = {params : myparams, headers : myheaders};

      return this._http.get<IConfigurations[]>(URL, options); // Retourne ceci -> configurations?namePart=AZERT

    }

}
