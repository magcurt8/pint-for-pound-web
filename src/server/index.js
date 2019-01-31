const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

// const mongoose = require('mongoose');

const router = express.Router();
const app = express();
const port = process.env.PORT || 8080;


app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// connect to database
// mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o');

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', (req, res) => {
  res.json({ message: 'hooray! welcome to our api!' });
});

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.set('port', port);

const server = http.createServer(app);
server.listen(port);
// app.listen(port);
console.log(`Magic happens on port ${port}`);
