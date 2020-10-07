import { Component, OnInit } from '@angular/core';
import {ContentList} from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  contentList: ContentList;
  display: string;

  constructor() {
    this.contentList = new ContentList();
    this.contentList.increaseCount({
      id: 0,
      author: 'Saad',
      title: 'Saad Amjad',
      body: 'Stuff about me'
    });
    this.contentList.increaseCount({
      id: 1,
      author: 'Joe Mama',
      title: 'Lorem Ipsum',
      body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
    });
    this.contentList.increaseCount({
      id: 2,
      author: 'Bob Bill',
      title: 'Ipsum Lorem',
      body: 'Contrary to popular belief, Lorem Ipsum is not simply random text.'
    });
    this.display = this.contentList.userOutput(0) + this.contentList.userOutput(1) + this.contentList.userOutput(2);
  }

  ngOnInit(): void {
  }

}
