// const   MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost/TodoApp', (err, db) => {
    if (err) {
       return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do'
    // },(err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //
    // });

    // db.collection('Users').insertOne({
    //     name: 'Lukas',
    //     age: 28,
    //     location: 'Warsaw'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert to Users Collection', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });


    db.close();
});
