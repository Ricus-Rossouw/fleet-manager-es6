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

let titleBar = new TitleBar('Application');
titleBar.addLink('Home', '');
titleBar.addLink('Cars', '');
titleBar.addLink('Drones', '');
titleBar.addLink('Map', '');
titleBar.appendElement($('body'));
