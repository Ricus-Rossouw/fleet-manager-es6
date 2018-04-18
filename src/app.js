// Libraries
import $ from 'jquery';

// Data Classes
import { Car } from './classes/car.js';
import { Drone } from './classes/drone.js';
import { fleet } from './fleet-data.js';
import { FleetDataService } from './services/fleet-data-service.js';

// UI Classes
import { TitleBar } from './ui/title-bar.js';
import { Button } from './ui/button.js';
import { Image } from './ui/image.js';
import { DataTable } from './ui/data-table.js';

let headers = 'license model make miles'.split(' ');
let dataService = new FleetDataService();

dataService.loadData(fleet);

let dataTable = new DataTable(headers, dataService.cars);

dataTable.appendElement($('body'));
