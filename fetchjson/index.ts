import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/todos/1';

// get the data
axios.get(url).then((response) => {
  console.log(response.data);
});

interface TODO {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((responese) => {
  const todo = responese.data as TODO;
  const userId = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  // call Todo function . input value about userId, title, completed.
  Todo(userId, title, completed);
});

// const the function Todo().
const Todo = (userId: number, title: string, completed: boolean) => {
  console.log(`
    This is todo id: ${userId}
    This is todo title: ${title}
    This is todo completed: ${completed}
    This is time Now ${Date()}
  `);
};
