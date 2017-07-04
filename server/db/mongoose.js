let mongoose = require('mongoose');

mongoose.Promise = global.Promise; // setting up using Promise
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = { mongoose };