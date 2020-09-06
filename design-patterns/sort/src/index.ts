import {Sorter} from './Sorters'; 
import {CharactersCollection} from './CharactersCollection';
import { NumbersCollection } from './NumbersCollection';
const sorter = new Sorter( new NumbersCollection([20, -3, -5, 0]));
const sorterString = new Sorter( new CharactersCollection('ZZXpsoacb'));
sorter.sort();
console.log(sorter.collection);
sorterString.sort();
console.log(sorterString.collection);
