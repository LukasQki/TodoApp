const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds125183.mlab.com:25183/lukasqki' || 'mongodb://localhost/TodoApp');

module.exports = {mongoose};