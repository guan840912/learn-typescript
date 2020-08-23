const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  //test: 'test',
};

// not use interface.
const printV = (valuesObject: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`Name: ${valuesObject.name}`);
  console.log(`Year: ${valuesObject.year}`);
  console.log(`Broken: ${valuesObject.broken}`);
};

printV(oldCivic);

console.log('==============================');
// use interface.
interface IoldCivic {
  name: string;
  year: number;
  broken: boolean;
  test?: string;
}

const printVInterface = (valuesObject: IoldCivic): void => {
  console.log(`Name: ${valuesObject.name}`);
  console.log(`Year: ${valuesObject.year}`);
  console.log(`Broken: ${valuesObject.broken}`);
  //if (valuesObject.test === undefined) {
  //  valuesObject.test = 'NoDefine_test';
  //}
  console.log(`Test is?: ${valuesObject.test ?? 'NoDefine_test'}`);
};

printVInterface(oldCivic);
