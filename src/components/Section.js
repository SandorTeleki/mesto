export default class Section {
  constructor(items, renderer, containerSelector) {
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
    this._items = items;
  }

  addItem(element) {
    this._container.prepend(element);
  }

//     addItem(element, prepend=true) {
//       if(prepend) {
//         this._container.prepend(element);
//       } else {
//         this._container.append(element);
//       }
//     }

  renderItems() {
    this._items.forEach(item =>{
      this._renderer(item);
    })
  }
}
