// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected with MongoDb ');

    // db.collection('Todos').insertOne({
    //     text: 'Somethig to do',
    //     completed: false
    // }, (err, results) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(results.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Peter',
    //     age: 31,
    //     location: 'Sofia'
    // }, (err, results) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(results.ops, undefined, 2));
    // });

    let users = db.collection('Users');
    users.insertOne({
        name: 'Maya',
        age: 30,
        location: 'Sofia'
    }, (err, results) => {
        if (err) {
            return console.log('Unable to insert todo', err);
        }
        console.log(JSON.stringify(results.ops, undefined, 2));
    });

    db.close();
});