// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected with MongoDb ');
    //deleteMay
    // db.collection('Todos').deleteMany({ text: 'Eat lunch' }).then((result) => {
    //         console.log(result);
    //     })
    // db.close();

    //deleteOne
    // db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then((result) => {
    //     console.log(result);
    // });

    //findOne and Delete
    // db.collection('Todos').findOneAndDelete({ completed: false }).then((res) => {
    //     console.log(res);
    // });

    db.collection('Users').findOneAndDelete({ _id: new ObjectID('59565ad03ff91276521bad24') })
        .then((res) => {
            console.log(res);
        });
});