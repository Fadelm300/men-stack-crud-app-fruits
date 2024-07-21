// Here is where we import modules
// We begin by loading Express

require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

// DATABASE
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection;

db.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});



const app = express();

// MIDDLEWARE
app.use(morgan('dev'));

// ROUTES

// Landing Page
app.get('/', (req, res, next) => {
  res.render('index.ejs');
});

app.listen(3001, () => {
  console.log('Listening on port 3001');
});