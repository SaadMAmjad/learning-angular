import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  contentList: ContentList;

  constructor() {
    this.contentList = new ContentList();
    this.contentList.increaseCount({
      id: 0,
      author: 'Saad',
      title: 'Saad Amjad',
      body: 'Stuff about me'
    });
  }

  ngOnInit(): void {
  }

}
