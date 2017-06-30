// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected with MongoDb ');

    // db.collection('Todos').find({ _id:  }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(docs);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);

    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // })

    db.collection('Users').find({ name: 'Maya' }).toArray().then((docs) => {
        console.log(docs);
    }, (err) => {
        console.log(err);
    });
    // db.close();
});