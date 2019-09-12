express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/node-demo');

var nameSchema = new mongoose.Schema({
  email: String
});

var User = mongoose.model('User', nameSchema);

app.post('/team', (req, res) => {
  var myData = new User(req.body);
  myData
    .save()
    .then(item => {
      res.send('item saved to database');
    })
    .catch(err => {
      res.status(400).send('unable to save to database');
    });
});

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/public/countySelector.html', function(req, res) {
  console.log('Failte club!');
  // ejs render automatically looks in the views folder
  //   res.render('index');
});

app.listen(port, function() {
  console.log('Our app is running on http://localhost:' + port);
});
