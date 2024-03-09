// Import the database connection module
const db = require('../models/db.js');

// Define the getUsers function
exports.getUsers = (req, res, next) => {
    // Execute a SQL query to get all records from the 'usernames' table
    db.execute('SELECT * FROM usernames')
    .then(([rows]) => {
        // If no records are found, send a response with the message 'No users found'
        if(rows.length === 0) {
            res.send('No users found');
        } else {
            // If records are found, send a response with the records
            res.send(rows);
        }
    })
    // If there's an error executing the query, log the error
    .catch(err => console.log(err));
};
