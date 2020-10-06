class ContentList {
  items: Content[];
  static contentCount = 0;

  constructor(item: Content) {
    this.items[0] = item;
  }

  get items(): Content[]{
    return this.items;
  }

  increaseCount() {
    return ++ContentList.contentCount;
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
