const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://<LukasQki>:<iiCjMMmkx6v7XJ07bA1i>@ds125183.mlab.com:25183/lukasqki' || 'mongodb://localhost/TodoApp');

module.exports = {mongoose};