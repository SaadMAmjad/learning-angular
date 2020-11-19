import { Injectable } from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {STUFF} from '../helper-files/contentDb';
import { MessageService } from '../message.service';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentArrayService {

  constructor(private messageService: MessageService) { }

  getContent(): Content[] {
    return STUFF;
  }

  getContentObs(): Observable<Content[]> {
    this.messageService.add('ContentArrayService: fetched content');
    return of(STUFF);
  }
}
