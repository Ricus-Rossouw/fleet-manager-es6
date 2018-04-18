import { Menu } from '../ui/menu.js';

export class ApplicationBase {
  constructor(title) {
    this.title = title;
    this.menu = new Menu(this.title);
  }

  start(element) {
    this.menu.appendElement(element);
  }
}
