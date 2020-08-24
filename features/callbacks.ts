// callback

const add = (a: number, b: number): number => {
  return a + b;
};

const multiply = (a: number, b: number): number => {
  return a * b;
};

const doWhatever = (a: number, b: number) => {
  console.log(`Here is your two input numbers ${a} , ${b}`);
};

const calc = (num1: number, num2: number, callback: Function): number => {
  // check the callback space is the function type.
  if (typeof callback === 'function') {
    return callback(num1, num2);
  }
};

console.log('return add log');

console.log(calc(1, 2, add)); // output -> 3

console.log('return multiply log');

console.log(calc(1, 2, multiply)); // output -> 2

console.log('return doWhatever log');

calc(1, 2, doWhatever); // output -> Here is your two input numbers 1 , 2

// callback function , if you don't want define every time .
console.log(
  calc(1, 2, function (a: number, b: number) {
    return a - b;
  }),
);
// output -> -1

// put error not the function .
console.log(calc(1, 2, multiply)); // output -> 2

// output
//return add log
//3
//return multiply log
//2
//return doWhatever log
//Here is your two input numbers 1 , 2
//-1
//2
