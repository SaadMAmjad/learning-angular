class ContentList {

  constructor() {
    this.items = [];
    this.increaseCount();
  }

  get getItems(): Content[]{
    return this.items;
  }
  static contentCount = 0;
  items: Content[];

  increaseCount(): number {
    return ContentList.contentCount++;
  }

  numberOfItems(): number {
    return this.items.length;
  }

  userOutput(id: number): string {
    return '<h1> ID: ' + this.items[id].id + '</h1>' +
      '<h2> Author: ' + this.items[id].author + '</h2>' +
      '<h2> Title: ' + this.items[id].title + '</h2>' +
      '<h2> Body:  ' + this.items[id].body + '</h2>';
  }

}
