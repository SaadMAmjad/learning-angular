import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Content} from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {

  @Output() newContentEvent = new EventEmitter<Content>();
  newContent: Content;

  constructor() {
    this.newContent = {
      author: '', body: '', id: 0, imageUrl: '', tags: [], title: '', type: ''
    };
  }

  ngOnInit(): void {
  }

  addContent(): void {
    const promise = new Promise( (success, fail) => {
      if (this.newContent.id && this.newContent.title.trim() && this.newContent.author.trim() && this.newContent.body.trim()) {
        this.newContent.id = +this.newContent.id;
        this.newContentEvent.emit(this.newContent);
        success('it worked');
      }
      else {
        fail('it broke');
      }
    });
    promise.then(successResult => console.log(successResult)).catch(failResult => console.log(failResult));
  }
}
