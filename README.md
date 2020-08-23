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
