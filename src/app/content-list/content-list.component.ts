import { Component, OnInit } from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {STUFF} from '../helper-files/contentDb';
import {ContentArrayService} from '../services/content-array.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  stuff: Content[];
  constructor(private contentService: ContentArrayService) {
  }

  ngOnInit(): void {
    // this.stuff = this.contentService.getContent();
    this.contentService.getContentObs().subscribe(cl => {
      this.stuff = cl;
    });
  }

  searchArray(value: string, array: Content[]): void {
    let incrementer = 0;
    for (const entry of array) {
      if (entry.title === value) {
        incrementer++;
        console.log('Item exists');
      }
    }
    if (incrementer === 0) {
      console.log('Item does not exist');
    }
  }
}
