//import { User, exampleStr } from './User';
//const exampleStra = exampleStr;
//
//const user = new User();
//console.log(user);

const test = (prop) => {
  console.log(prop || 42);
  console.log(prop ?? 42);
  console.log('------------------------------------');
};
//test(0);
//test(null);
//test(undefined);
//test('string');

class Car {
  _brand: number;
  constructor(brand) {
    this._brand = brand;
  }
  get brand() {
    return this._brand;
  }

  set brand(value) {
    this._brand = value;
  }
}

const car = new Car(6);
console.log(typeof Car); // function
console.log(typeof car); // object
console.log(car);
console.log(car.brand);
car.brand = 7;
console.log(car.brand);
