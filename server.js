require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

// Routes
const index = require('./routes/index');
const image = require('./routes/image');


const dbPassword = process.env.DB_PASSWORD;
const dbName = 'darkroom'; 
const connectionString = `mongodb+srv://hodhan:${dbPassword}@cluster0.v9ky2b5.mongodb.net/${dbName}?appName=Cluster0`;

console.log("DEBUG: Connecting to:", connectionString.replace(dbPassword, "********"));

mongoose.connect(connectionString)
    .then(() => {
        console.log('Database connected successfully to MongoDB Atlas Cloud!');
    })
    .catch((err) => {
        console.error("Database connection error: ", err);
    });

// --- APP INITIALIZATION ---
const app = express();

// View Engine
app.set('view engine', 'ejs');

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/', index);
app.use('/image', image);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});