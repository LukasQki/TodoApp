const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/users');

// Todo.remove({}).then((result) => {
// console.log(result)});

// Todo.findOneAndRemove
// Todo.findByIdAndRemove
//
// Todo.findOneAndRemove({ _id: '597b99d720af8c169fa6be0b'}).then((todo) => {
//     console.log(todo);
// });

Todo.findByIdAndRemove('597b99d720af8c169fa6be0b').then((todo) => {
    console.log(todo);
});