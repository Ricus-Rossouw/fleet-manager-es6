import { Page } from '../framework/page.js';
import { Image } from '../ui/image.js';
import { Button } from '../ui/button.js';
import { application } from '../app.js';

export class HomePage extends Page {

  constructor() {
    super('Home');
  }

  createElement() {
    super.createElement();

    let styleString = 'width: 300px; height: 80px; font-size: 26px; margin: 10px;';
    let carButton = new Button('Self Driving Cars');
    carButton.setStyleString(styleString);
    carButton.appendToElement(this.element);
    carButton.element.click(() => application.activateRoute('Cars'));

    let droneButton = new Button('Drones');
    droneButton.setStyleString(styleString);
    droneButton.appendToElement(this.element);
    droneButton.element.click(() => application.activateRoute('Drones'));
  }

  getElementString() {
    return '<div style="text-align: center;"></div>';
  }
}
