import $ from 'jquery';

export class BaseElement {
  constructor() {
    // jQuery Object
    this.element = null;
  }

  getElementString() {
    throw 'Please override getElementString() in BaseElement';
  }

  createElement() {
    let s = this.getElementString();
    this.element = $(s);
  }

  appendElement(el) {
    this.createElement();
    el.append(this.element);
  }
}
