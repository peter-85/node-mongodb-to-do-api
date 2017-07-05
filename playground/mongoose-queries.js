const { ObjectID } = require('mongodb');

let { mongoose } = require('../server/db/mongoose');
let { Todo } = require('../server/models/todo');

let id = '595cc6ae230d0513f8a67621';

if (!ObjectID.isValid(id)) {
    console.log('Id is not valid');
}

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log(todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log(todo);
// });

Todo.findById(id).then((todo) => {
    console.log(todo)
}).catch((e) => {
    console.log(e.name);
})