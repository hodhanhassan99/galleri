const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

// Import the configuration file
const config = require('./_config');

// Define routes
let index = require('./routes/index');
let image = require('./routes/image');

// Database connection string based on environment or fallback to development
let connectionString = config.mongoURI[process.env.NODE_ENV] || config.mongoURI.development;

// connecting the database to MongoDB Atlas cloud
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log("Database connection error: ", err);
    }
});

// test if the database has connected successfully
let db = mongoose.connection;
db.once('open', () => {
    console.log('Database connected successfully to MongoDB Atlas Cloud!');
});

// Initializing the app
const app = express();

// View Engine
app.set('view engine', 'ejs');

// Set up the public folder
app.use(express.static(path.join(__dirname, 'public')));

// body parser middleware
app.use(express.json());

// Routes middleware
app.use('/', index);
app.use('/image', image);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});