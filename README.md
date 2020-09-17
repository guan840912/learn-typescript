## Lession 1

### _env_

- npm i -g typescript ts-ndoe
- tsc --help (for shooting)
- https://code.visualstudio.com
- install `code` command in 'PATH'
- install extensions `prettier`
- code -> Preferences -> settings -> format on save
- code -> Preferences -> settings -> prettier: Single Quote
- code -> Preferences -> settings -> Editor: Tab Size '2'

### _first fetchjson project_

- https://jsonplaceholder.typicode.com/ can get fake api data
- going to use https://jsonplaceholder.typicode.com/todos/1...
- mkdir fetchjson && cd fetchjson
- npm init -y
- npm install axios (https://www.npmjs.com/package/axios)

```bash
    ls fetchjson
    node_modules/
    package.json
    package-lock.json
```

### _write some code_

- touch `index.ts`

```typescript
import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then((response) => {
  console.log(response.data);
});
```

- tsc index.ts
- node index.js or no compiler ts-node index.ts

---

| Type           |           |         |         |         |
| -------------- | --------- | ------- | ------- | ------- |
| Primitive Type | number    | boolean | void    | unefind |
|                | string    | sumbol  | null    |         |
| Object Type    | functions | arrays  | classes | objects |

---

Type -> _Easy way to refer to hte different properties + functions that a value has._

### type project basic overview

- mkdir features && cd features
- touch type.ts

---

## TypeScript Tutorial for Beginners

> 今天，我們將學習 `typescript` ，並且本教程提供 `typescript` 的基礎知識，並嘗試涵蓋大多數主題，例如 `typescript` 變量(variables)，函數(function)，枚舉(enum)，類(class)，訪問修飾(access modifiers)
> ，界面(interface)，類型轉換(typecasting)，箭頭函數(arrow functions )等，供初學者入門。 angular.Typescript 是 javascript 的超集，它向 javascript 添加了可選的
> 靜態類型。 您可以使用在 javascript 中執行的 typescript 進行所有操作。Typescript 是由 Microsoft 開發和維護的免費開放源代
> 碼編程語言。Typescript 基於 ES5 進行編譯，所有瀏覽器均支持。

### Variables Example

```typescript
let num: number; //Defines a number variable
let str: String = 'Devglan'; //Defines a string variable and initialises to Devglan
let array: String[] = ['a', 'b', 'c']; //Defines a string array variable
let random: any[] = ['a', 1, true];
```

> 這種不同的變量類型的優點是-聲明為 number 的變量不能包含字符串值，因為 typescript 編譯器將向您顯示編譯錯誤。 同樣，如果您有一個聲明為 any 的變量，則可以保存任何數據類型。 這類似於 javascript 中的 var 關鍵字。

#### Typescript 還提供類似於面向對象語言(object oriented)的枚舉 (enums) 來聲明常量的支持。以下是在 Typescript 中聲明 枚舉(enums) 的示例。

```typescript
enum Role {
  Admin,
  User,
  SuperAdmin,
}
let role = Role.Admin;
```

### Arrow Function Example

#### 箭頭函數類似於 java 中的 lambda 表達式。我們可以使用它執行內聯函數。假設我們有一個如下的代碼塊：

```typescript
// 一般 functionc
const greet = function greeter(person) {
  console.log('Hello, ' + person);
};

// arrow function
const greet = (person) => {
  console.log('Hello, ' + person);
};
```

### Interface in TypeScript

#### 接口用於定義可重用的自定義數據類型。例如，如果要創建可重用的 User 對象，則可以將名稱(name)，年齡(age)，性別(gender)作為其類型。

```typescript
interface User {
  name: string;
  age: number;
  gender: string;
}
```

And this can be used as a reusable type as below:

```typescript
let createUser = (user: User) => {};
```

### TypeScript Class

> Class is a logical entity that has variables and functions that are highly related to perform single operation. The difference between a class and an interface is that class
> can have implementation inside it whereas an interface does not have any implementation inside it. Following is a simple User class that has fields and methods:

```typescript
class User {
  name: string;
  age: number;
  gender: string;

  createUser(userr: User) {
    //create user
  }
}
```

### Now we can instantiate this class and use it's method in following ways

```typescript
let user = new User();
user.name = 'Dhiraj';
user.gender = 'Male';
user.age = 23;
user.createUser(user);
```

### TypeScript Constructor

```typescript
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

const echoClass = new twoClass(4, 'yellow'); // output 4 yellow
```

### Tool to help us run Typescript in the browser

```bash
npm i -g parcel-bundler

# run devloper serve
parcel index.html
```

### design pattern 1 : google maps .

- user : User.ts
- company : Company.ts
- google maps : CustomMap.ts

```bash
# need npm i parcel-bundler @type/googlemaps  ,  @type/googlemaps -> import via namespaces.
# know about private , and implements with interface .
```

## Configuring the TS Compiler

```bash
mkdir project
mkdir project/{src,build}

cd project/
tsc --init

# uncomment
vim tsconfig.json
=======================================================
...
"outDir": "./build"
"rootDir": "./src"
...
=======================================================

# create index.ts in src/ dir
vim src/index.ts
=======================================================
console.log("hi here")
=======================================================

# manual Compiler index.ts
tsc

dirroot like that .
tree project

project
├── build
│   └── index.js
├── src
│   └── index.ts
└── tsconfig.json

2 directories, 3 files

# auto Compiler *.ts
tsc -w
```

## new project

```bash
# init project
npm init -y

# install package .
npm i concurrently nodemon

# add some scripts ~
vim package.json
=======================================================
{
  "name": "sort",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start:build": "tsc -w",
    "start:run": "nodemon build/index.js",
    "start": "concurrently npm:start:*"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "concurrently": "^5.3.0",
    "nodemon": "^2.0.4"
  }
}

=======================================================
npm start

下午3:37:05 - File change detected. Starting incremental compilation...
[start:build]
[start:build]
[start:build] 下午3:37:05 - Found 0 errors. Watching for file changes.
[start:run] [nodemon] restarting due to changes...
[start:run] [nodemon] starting `node build/index.js`
[start:run] sort
[start:run] sss
[start:run] apple
[start:run] [nodemon] clean exit - waiting for changes before restart

```

### Tips :

```typescript
// this class
class Sorter {
  collection: number[]
  constructor(public collection: number[]) {
    this.collection = collection;
  }
  }
}

// can write like that .
class Sorter {
  constructor(public collection: number[]) {}
  }
}
```

```ts
// example one class return any type
class abc{
  static getid(id: any): any{
    if(typeof id === "string"){
      return "1"
    }else if(typeof id === "number"){
      return 1
    }
  }
}
console.log(abc.getid(1));
console.log(abc.getid("1"));

```
