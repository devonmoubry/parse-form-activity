//TODO create Express app
const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/signup', function (req, res) {
  res.render('signup');
})

// app.get('/results', function (req, res) {
//   res.render('results');
// })

// Receives data from form (action='/results')
// 'req.body' now contains form data.
app.post('/results', function(req, res){
  const name = req.body.name;
  const email = req.body.email;
  const year = req.body.year;
  const position = req.body.position;
  const password = req.body.password;
  const results = `<p>Your Name: ${name} </p>
                  <p>Your email: ${email} </p>
                  <p>Year of birth: ${year}</p>
                  <p>Position:  ${position}</p>
                  <p>Password: ${password}</p>
                  `;
  res.send(results);
});

app.listen(3000, function () {
  console.log('Successfully started express application!');
})
