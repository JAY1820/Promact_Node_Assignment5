// Import the mysql2 package
const mysql = require("mysql2");

// Create a connection pool with the database configuration
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "nodedb",
  password: "2001",
});

// Try to get a connection from the pool
pool.getConnection((err, connection) => {
    // If there's an error, log it
    if(err) {
        console.error("Something went wrong connecting to the database ...");
        if(err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error("Database connection was closed.")
        }
        if(err.code === 'ER_CON_COUNT_ERROR') {
            console.error("Database has too many connections.")
        }
        if(err.code === 'ECONNREFUSED') {
            console.error("Database connection was refused.")
        }
    }

    // If the connection is successful, log it and release the connection back to the pool
    if(connection) {
        console.log("Successfully connected to the database.");
        connection.release();
    }
});

// Try to create a table named 'usernames' if it doesn't already exist
pool.query(
  `
    CREATE TABLE IF NOT EXISTS usernames (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL
    )
`,
  (err, results) => {
    // If there's an error, log it
    if (err) {
      console.error("Failed to create table", err);
    } else {
      // If the table is created successfully, log it
      console.log("Table created successfully");
    }
  }
);

// Export the promise-based version of the pool
module.exports = pool.promise();
