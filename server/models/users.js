let mongoose = require('mongoose');

let User = mongoose.model('User', {
    email: {
        required: true,
        trim: true,
        type: String,
        minlength: 1
    }
});


// let newUser = new User({
//     email: 'solka.lukasz@gmail.com'
// });
//
// newUser.save().then((doc) => {
//     console.log(doc)
// }, (e) => {
//     console.log('Something went wrong.', e);
// });

module.exports = {User};