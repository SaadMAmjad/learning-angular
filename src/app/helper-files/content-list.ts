import {Content} from './content-interface';

export class ContentList {

  constructor() {
    this.items = [];
  }

  get getItems(): Content[]{
    return this.items;
  }
  static contentCount = 0;
  items: Content[];

  increaseCount(content: Content): void {
    this.items.push(content);
  }

  numberOfItems(): number {
    return this.items.length;
  }

  userOutput(id: number): string {
    return '<p> ID: ' + this.items[id].id + '</p>' +
      '<h2> Title: ' + this.items[id].title + '</h2>' +
      '<b> Author: ' + this.items[id].author + '</b>' +
      '<p> Body:  ' + this.items[id].body + '</p>';
  }

}
