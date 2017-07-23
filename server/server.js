let express = require('express');
let bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/users');

let app = express();

app.use(bodyParser.json());

//setting up route.
app.post('/todos', (req, res) => {
    // console.log(req.body);
    let todo = new Todo({
       test: req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});


module.exports = {app};

