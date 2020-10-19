import {Component, Input, OnInit} from '@angular/core';
import {Content} from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  @Input() stuff: Content;
  constructor() {
  }

  showId(): void{
    console.log('id number ' + this.stuff.id);
  }

  ngOnInit(): void {
  }

}
