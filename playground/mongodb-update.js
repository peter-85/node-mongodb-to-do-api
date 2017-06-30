// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected with MongoDb ');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5956590e3ff91276521bac87")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((res) => {
    //     console.log(res);
    // })

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('595632aa03c93c26782f570d')
    }, {
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((res) => {
        console.log(res);
    })

    // db.close();


});