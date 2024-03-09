# Promact_Node_Assignment5

This is a simple MVC (Model-View-Controller) project using Express.js and MySQL.

## Project Structure

The project has the following structure:


/myapp |-- /node_modules |-- /models | |-- db.js |-- /views | |-- create.ejs |-- /controllers | |-- home.js | |-- users.js | |-- create.js |-- package.json |-- app.js


## Setup

1. Install Node.js and npm if you haven't already.
2. Clone this repository to your local machine.
3. Navigate to the project directory in your terminal.
4. Run `npm install` to install the project dependencies.

## Database Setup

1. Install MySQL server if you haven't already and start it.
2. Create a new database named `nodedb`.
3. Update the `models/db.js` file with your MySQL root password.

## Running the Project

To start the server, run `node app.js` in your terminal. Then, open your web browser and go to `http://localhost:3000`.

## Project Flow

1. When you navigate to `http://localhost:3000`, you will see a greeting text.
2. When you navigate to `http://localhost:3000/create`, you will see a form with a "userName" input and a submit button. When you click the submit button, it will make a POST request to the "/add" route and store the entered username in the `usernames` table in your MySQL database.
3. When you navigate to `http://localhost:3000/users`, you will see the saved usernames from the `usernames` table in your MySQL database. If no usernames are found, it will display "No users found".
4. If you try to access a non-existent route, you will see a 404 error page.