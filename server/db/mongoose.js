let mongoose = require('mongoose');

mongoose.Promise = global.Promise; // setting up using Promise

let db = {
    localhost: 'mongodb://localhost:27017/TodoApp',
    mlab: 'mongodb://<peter_85>:<fce13382>@ds149122.mlab.com:49122/to-do-app-udemy'
};
mongoose.connect(db.mlab || db.localhost);

module.exports = { mongoose };