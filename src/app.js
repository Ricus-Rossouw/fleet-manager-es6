// Libraries
import $ from 'jquery';

// Data Classes
import { fleet } from './fleet-data.js';
import { FleetDataService } from './services/fleet-data-service.js';
import { ApplicationBase } from './framework/application-base.js';

export class App extends ApplicationBase {

  constructor() {
    super('Fleet Manager');
    this.dataService = new FleetDataService();
    this.dataService.loadData(fleet);
  }

}

export let application = new App();

application.start($('body'));
