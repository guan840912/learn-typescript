"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
// get the data
axios_1["default"].get(url).then(function (response) {
    console.log(response.data);
});
axios_1["default"].get(url).then(function (responese) {
    var todo = responese.data;
    var userId = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    // call Todo function . input value about userId, title, completed.
    Todo(userId, title, completed);
});
// const the function Todo().
var Todo = function (userId, title, completed) {
    console.log("\n    This is todo id: " + userId + "\n    This is todo title: " + title + "\n    This is todo completed: " + completed + "\n    This is time Now " + Date() + "\n  ");
};
