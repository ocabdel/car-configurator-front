import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPacks } from '../domain/ipacks';

@Injectable({
  providedIn: 'root'
})
export class PacksService {

  //constructor() { }

  constructor(private _http: HttpClient) { } // Inject HttpClient

  public getAllPacks(pageNumber:number=0, size: number = 10): Observable<IPacks[]> {
    const URL: string = environment.url_base + '/packs';

    let params = new HttpParams();
    params = params.append('page', pageNumber.toString());
    params = params.append('size', size.toString());

    return this._http.get<IPacks[]>(URL, {params:params});
  }

  public addPack(p: IPacks): Observable<any> {
    const URL: string = environment.url_base + '/packs';
    return this._http.post(URL, p);
    }

    getPackById(id: string): Observable<IPacks> {
      const URL: string = environment.url_base + '/packs';
      return  this._http.get<IPacks>(URL + '/' + id);
    }

    deletePackById(id: string): Observable<any> {
      const URL: string = environment.url_base + '/packs';
     return  this._http.delete(URL + '/' + id);
    }

}
