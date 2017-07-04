let express = require('express');
let bodyParser = require('body-parser');

let mongoose = require('./db/mongoose');
let { Todo } = require('./models/todo');
let { User } = require('./models/user');

let app = express();

app.use(bodyParser.json()); // using middleware to parse json in body of the request

app.post('/todos', (req, res) => {
    let todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    })
})

app.listen(3010, () => {
    console.log('Started on port 3010');
});

module.exports = { app };