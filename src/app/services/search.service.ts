import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private messageSource = new BehaviorSubject<string>("");

  // This is the public Observable on which client will subscribe
  //private currentMessage = this.messageSource.asObservable(); -> for the method subscriber registerTo
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  // This is the publish part, triggered whenever some changes occurs
 // Publisher
  public changeMessage(message: string) {

    this.messageSource.next(message); // Emit an info for subscribers

  }
}
