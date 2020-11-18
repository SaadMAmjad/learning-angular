import { Injectable } from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {STUFF} from '../helper-files/contentDb';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentArrayService {

  constructor() { }

  getContent(): Content[] {
    return STUFF;
  }

  getContentObs(): Observable<Content[]> {
    return of(STUFF);
  }
}
