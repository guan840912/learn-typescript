var myArr = [
  {
    num: 5,
    str: 'apple',
  },
  {
    num: 7,
    str: 'cabbage',
  },
  {
    num: 1,
    str: 'ban',
  },
];

myArr.sort(function (var1, var2) {
  // return -1 不變， return 換位置 。
  if (var1.str > var2.str) {
    return -1;
  } else {
    return 1;
  }
});

console.log(myArr); // will get cabbage , ban , apple

//[
//  { num: 7, str: 'cabbage' },
//  { num: 1, str: 'ban' },
//  { num: 5, str: 'apple' }
//]

myArr.sort(function (var1, var2) {
  if (var1.str < var2.str) {
    return -1;
  } else {
    return 1;
  }
});

console.log(myArr); // will get apple , ban , cabbage

//[
//  { num: 5, str: 'apple' },
//  { num: 1, str: 'ban' },
//  { num: 7, str: 'cabbage' }
//]

myArr.sort(function (var1, var2) {
  if (var1.num < var2.num) {
    return -1;
  } else {
    return 1;
  }
});

console.log(myArr); // will get apple , ban , cabbage
//[
//  { num: 1, str: 'ban' },
//  { num: 5, str: 'apple' },
//  { num: 7, str: 'cabbage' }
//]
