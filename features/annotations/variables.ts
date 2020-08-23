// type annotations
const apples: number = 5;
const isright: boolean = false;
const speed: string = 'fast';

// let , can be annotations always.

let aaa: number = 7;
aaa = 8;

let nothing: null = null;
let nothingdefine: undefined = undefined;
// built in object.
let now: Date = new Date();

// array
let color: string[] = ['apple', 'aa', 'xx'];
let numbers1: number[] = [1, 2, 3];
let Booleans: boolean[] = [true, false, true];

// Classes
class Car {}
let car: Car = new Car();

// Object ,
let points = {
  x: 's',
  y: 7,
};

let pointsann: { x: number; y: number } = {
  x: 10,
  y: 7,
};

// function

const logNumber = (i: number) => {
  console.log(i);
};

logNumber(123);

// When to  use annotations
// 1) Function that returns the 'any' type .

const josn = '{"x": 1,"y":2}';
const testjson = JSON.parse(josn);
console.log(testjson); // output like {x: 1,y:2}

const josn2: { x: number; y: number } = {
  x: 1,
  y: 2,
};
const testjson2 = JSON.stringify(josn2);

console.log(testjson2); // output like {"x":1,"y":2} -> object to string;

// 描述 一個變數在一行，但還不給予值。
let words = ['red', 'blue', 'green'];
let findwords: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    findwords = true;
  }
}

console.log(findwords);

// 3) variables whose type cannot be inferred correctly .
let numbers = [-10, -1, 12];
let numberAboveZore: number | boolean = false;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZore = numbers[i];
    console.log(numberAboveZore);
  }
}
