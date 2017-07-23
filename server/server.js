const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/TodoApp');

//creating mongoose model
let Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

let User = mongoose.model('User', {
   email: {
       required: true,
       trim: true,
       type: String,
       minlength: 1
   }
});

let newUser = new User({
    email: 'solka.lukasz@gmail.com'
});

newUser.save().then((doc) => {
    console.log(doc)
}, (e) => {
    console.log('Something went wrong.', e);
});


// let newTodo = new Todo({
//     text: 'Cook dinner'
// });

// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (e) => {
//     console.log('Unable to save todo');
// });



