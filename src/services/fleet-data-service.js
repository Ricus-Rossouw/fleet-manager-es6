import { Car } from '../classes/car.js';
import { Drone } from '../classes/drone.js';
import { DataError } from './data-error.js';

/**
 * @desc This class will handle data manipulation for the fleet object
*/

export class FleetDataService {
  constructor() {
    this.cars = [];
    this.drones = [];
    this.errors = [];
  }

  getCarByLicense(license) {
    return this.cars.find((car) => {
      return car.license === license;
    });
  }

  filterCarsByMake(filter) {
    return this.cars.filter(car => car.make.indexOf(filter) >= 0);
  }

  /**
  * @desc loads data called depending on vehicle type
  * @param fleet object
  * @return objects - car, drone or error
  */
  loadData(fleet) {
    for(let data of fleet) {
      switch(data.type) {
        case 'car':
          if(!this.validateData(data)) {
            let e = new DataError('Invalid car data', data);
            this.errors.push(e);
            return;
          }
          let car = this.loadCar(data);
          if(!car) {
            return;
          }
          this.cars.push(car);
          break;
        case 'drone':
          if(!this.validateData(data)) {
            let e = new DataError('Invalid drone data', data);
            this.errors.push(e);
            return;
          }
          let drone = this.loadDrone(data);
          if(!drone) {
            return;
          }
          this.drones.push(drone);
          break;
        default:
          let e = new DataError('Invalid vehicle type', data);
          this.errors.push(e);
          break;
      }
    }
  }

  /**
  * @desc retrieves car object
  * @return object - car or error
  */
  loadCar(car) {
    try {
      let c = new Car(car.license, car.model, car.latLong);
      c.miles = car.miles;
      c.model = car.make;
      return c;
    } catch(e) {
      this.errors = new DataError('Error loading car', car);
    }

    return null;
  }

  /**
  * @desc retrieves drone object
  * @return object - drone or error
  */
  loadDrone(drone) {
    try {
      let d = new Drone(drone.license, drone.model, drone.latLong);
      d.airTimeHours = drone.airTimeHours;
      d.base = drone.base;
      return d;
    } catch(e) {
      this.errors = new DataError('Error loading drone', drone);
    }

    return null;
  }

  /**
  * @desc checks for valid data
  * @return bool - true or false
  */
  validateData(data) {
    let requiredProps = ['license', 'model', 'latLong'];
    let hasErrors = false;
    for(let field of requiredProps) {
      if(!data[field]) {
        this.errors.push(new DataError(`Invalid field: ${field}`, data));
        hasErrors = true;
      }
      return !hasErrors;
    }
  }
}
