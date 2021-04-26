const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./config/database');
const cors = require('cors');
const morgan = require('morgan');

db.authenticate()
  .then(() => 'Database connected...')
  .catch(err => console.log('Error: ' + err))

const app = express();

app.use(cors());
app.options('*', cors())

//middleware
app.use(bodyParser.json())
app.use(morgan('dev'));

// Routes
app.get('/', (req, res) => res.send('INDEX'));
app.use('/instructor', require('./routes/instructors')) //Instructor routes
app.use('/course', require('./routes/courses')) //Course routes

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server startedon port ${PORT }`))