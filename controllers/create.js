// Import the database connection module
const db = require('../models/db.js');

// Define the getCreate function
exports.getCreate = (req, res, next) => {
    res.render('create');
};

// Define the postAddUser function
exports.postAddUser = (req, res, next) => {
    const userName = req.body.userName;
    // Execute a SQL query to insert the username into the 'usernames' table
    db.execute('INSERT INTO usernames (name) VALUES (?)', [userName])
    .then(() => {
        // If the query is successful, redirect to the '/users' route
        res.redirect('/users');
    })
    .catch(err => console.log(err));
};
