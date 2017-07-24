const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/users');

let userId = '5974e841e54aa8f01844f2e5';
// let id = '5976382e36c999bc0975a7a61';
//
// if(!ObjectID.isValid(id)) {
//     console.log('Id not valid');
// }

// Todo.find({
//    _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
// }).catch((e) => {
//     console.log(e);
// });


User.findById(userId).then((user) => {
   if(!user){
       return console.log('There`s no user with passed id');
   }
   console.log('User:',user);
}, (e) => {
    console.log(e);
});