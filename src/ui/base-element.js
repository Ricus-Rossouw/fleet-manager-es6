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

  enableJS() {
    componentHandler.upgradeElement(this.element[0]);
  }

  appendToElement(el) {
    this.createElement();
    el.append(this.element);
    this.enableJS();
  }
}
