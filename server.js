
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var employee = require('./routes/employees'); //routes are defined here
var app = express(); //Create the Express app

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname + "/html"));

app.use(bodyParser.json())



app.use(bodyParser.urlencoded( { extended : true}));
app.use('/api', employee); //This is our route middleware

var connectionString = 'mongodb://172.27.59.112:27017/test';
 mongoose.connect(connectionString);

//module.exports = app;


app.set('port', process.env.PORT || 3003);

 
var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});
