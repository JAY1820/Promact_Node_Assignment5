// Import the required modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Import the controllers
const homeController = require('./controllers/home');
const usersController = require('./controllers/users');
const createController = require('./controllers/create');

// Create an Express application
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Use body-parser middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Define the routes
app.get('/', homeController.getHome);
app.get('/users', usersController.getUsers); 
app.get('/create', createController.getCreate);
app.post('/add', createController.postAddUser);

// Define a middleware function for handling 404 errors
app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});

// Start the server on port 3000
app.listen(3000);
