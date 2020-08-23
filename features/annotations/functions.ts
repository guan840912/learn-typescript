const add = (a: number, b: number): number => {
  return a + b;
};

function add2(a: number, b: number): number {
  return a + b;
}

console.log(add(1, 2));
add2(2, 22);

// use void type , you didn't return value .
const logger = (message: string): void => {
  console.log(message);
};

logger('apple');
// if you want return value , you can not use void  , and catch error , you can use 'if' .
const throwError = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }
  return message;
};
