const { ObjectID } = require('mongodb');

let { mongoose } = require('../server/db/mongoose');
let { Todo } = require('../server/models/todo');

Todo.findByIdAndRemove('595d1892040b45291005a2bd').then((todo) => {
    console.log(todo);
})