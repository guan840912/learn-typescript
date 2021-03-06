import * as _ from 'lodash';
import { reduce } from 'lodash';

class User {
  name: string;
  age: number;
  gender: string;

  createUser(userr: User) {
    //create user
    return userr;
  }
}
const aaa = new User();
aaa.name = 'neil';
aaa.age = 25;
//aaa.gender = 'man';

// use aaa class function create object .
aaa.createUser(aaa);

// Constructor is used to instantiate a class.
// create UserCons class , cna be used to instantiate .
class UserCons {
  name: string;
  age: number;
  gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

// now we can new UserCons get class UserCons { name: 'apple', age: 25, gender: 'man' };
const consuser = new UserCons('apple', 25, 'man');

console.log(consuser.name);
console.log(consuser.age);
console.log(consuser.gender);
console.log(consuser);

console.log(
  '=============================================OR===============================================',
);

class UserConsOr {
  name: string;
  age: number;
  gender: string;
  constructor(name?: string, age?: number, gender?: string) {
    this.name = name ?? 'defaultName';
    this.age = age ?? 0;
    this.gender = gender ?? 'defaultGender';
  }
}

// now we can new UserCons get class UserCons { name: 'apple', age: 25, gender: 'man' };
const consuserOr = new UserConsOr('NotDefaultUser');

console.log(consuserOr.name);
console.log(consuserOr.age);
console.log(consuserOr.gender);
console.log(consuserOr);

//apple
//25
//man
//UserCons { name: 'apple', age: 25, gender: 'man' }
//=============================================OR===============================================
//NotDefaultUser
//0
//defaultGender
//UserConsOr { name: 'NotDefaultUser', age: 0, gender: 'defaultGender' }

// Access Modifier in Typescript
//Access modifier is used to modify the access level of the variables and methods used inside any class.
//We have 3 different access modifiers in typescript - public, private and protected.
//By default all the members are public and tht's the reason we were able to initialise class variable from outside the class.
//Following is the syntax to use access modifiers.
// private
class UserConsOrPrivate {
  private name: string;
  private age: number;
  private gender: string;
  constructor(name?: string, age?: number, gender?: string) {
    this.name = name ?? 'defaultName';
    this.age = age ?? 0;
    this.gender = gender ?? 'defaultGender';
  }
}

// now we can new UserCons get class UserCons { name: 'apple', age: 25, gender: 'man' };
const consuserOrprivate = new UserConsOrPrivate('NotDefaultUser');

//console.log(consuserOrprivate.name); // <- can not be call use .
//console.log(consuserOrprivate.age); // <- can not be call use .
//console.log(consuserOrprivate.gender); // <- can not be call use .
console.log(consuserOrprivate);

const nus = [11, 22, 33, 44];
_.each(nus, function echo(i) {
  console.log(i);
});

console.log('--------------------------');

for (let i = 0; i < nus.length; i++) {
  console.log(nus[i]);
}

// uedmy classes .
class Vehicle {
  drive(): void {
    console.log('chugga chugga');
  }
  // if use private , only can be use in that class .
  private honk(): void {
    console.log('honk ca ca');
  }
  startHook(): void {
    this.honk();
  }
}

// extends can help us copy the `function` of `Class Vehicle` to `Class Car`
class Car extends Vehicle {}

const vehicle = new Vehicle();
vehicle.drive(); // chugga chugga
vehicle.startHook(); // honk ca ca

const vehicleextCar = new Car();
console.log('Car class =============');
vehicleextCar.startHook();

// Fields with Inheritance 具有繼承的字段
class oneClass {
  constructor(public color: string) {
    this.color = color ?? 'red';
  }
  echo(word): void {
    console.log(word);
  }

  helloworld() {
    return 'helloworld';
  }
}
class twoClass extends oneClass {
  constructor(public wheel: number, public color: string) {
    super(color);
    console.log(wheel);
    console.log(color);
  }
}

const echoClass = new twoClass(4, 'yellow');
