const carMaker: string[] = ['toyoda', 'ford', 'chevy'];
const dateArray = [new Date(), new Date()]; //type Date[]

const carByMake: string[][] = [];

let isString: boolean = false;

const aa = carMaker.map((car: string): string => {
  return car.toUpperCase();
});

console.log(aa);
const impDate: (Date | string)[] = [];
impDate.push(new Date());
impDate.push('2020-09-12');

console.log(impDate);
impDate.push(new Date());
impDate.push('2020-09-13');
console.log(impDate);

const greet = (person) => {
  console.log('Hello, ' + person);
};

greet('Neil');
