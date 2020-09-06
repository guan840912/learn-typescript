import {Sortable} from './Sorters';
export class CharactersCollection implements Sortable{
  constructor(public data: string){

  }
  get length():number{
    return this.data.length
  }

  compare(leftIndex: number , rightIndex:number): boolean{
    return this.data[leftIndex].toLocaleLowerCase() > this.data[rightIndex].toLocaleLowerCase();
  }

  swap(leftIndex: number , rightIndex:number): void{
    // .split use '' let abc => string['a','b','c']
    const characters = this.data.split('');
    const leftHand = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = leftHand;

    // .join use '' let string['a','b','c'] => abc
    this.data = characters.join('');
  }
}