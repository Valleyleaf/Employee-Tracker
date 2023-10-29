// Psudo-Code.

// Options needed: Departments, Roles, Employees.
// Function to create a new employee with all of the above added. This can be done with inquierer.
// Each of these options will be a multi-selection. Department will give the option of choosing all departments and roles.

// On application start. You will get the option of viewing departments, roles and employees.
// Departments will show department name and ids.

// on viewing roles, you will see the job title, id, department and salery.

// On viewing employees, you will see first and last name, job title, department, salery and their manager.

// Managers will be attached to departments. Note that you should be able to add new departments.

// For extra credit, do I want to make a function that allows you to select the manager of each department. Upon change,
// Should there be a function to warn that you are moving the admin title to someone else? Would be cool.

// Steps: Initialize> Initial menu prompt (Move to new file to keep things simple? Make new module)>
// Set up api's and middleware to handle requests.
const inquirer = require('inquirer');
const express = require('express');
const chalk = require('chalk');
const mysql = require('mysql2');
const fs = require('fs');
const sequelize = require('./Assets/router/connections');
const mainMenuInput = require('./index');
app = express();
// Is app needed here or did you add it just because?

const PORT = process.env.PORT || 3001;


async function main(){
    console.log(chalk.bgRed('Welcome to the Employee Directory \n' ));
    viewOrAddValue = await mainMenuInput()
    viewOrAdd(viewOrAddValue)
    
};
//The main function creates a title and then goes straight into mainSelection. Once a selection has been made. It will go to the router middleware
// Which will determine where the user will be sent.

async function viewOrAdd(data){
    switch (data) {
        case 1:
        case 2:
        case 3:
          console.log('Hit View Something');
          view(data);
          break;
        case 4:
          console.log('Hit add Department');
          break;
        case 5:
          console.log('Hit add Employee');
          break;
        case 6:
          console.log('Hit add Role');
          break;
        default:
          console.log('Invalid input');
          break;
      }
      
  };

  const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  });

function view(data){
    db.query('SELECT * FROM ', data, function (err, results) {
        console.log(results);
      });
}


  sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => main());

  });

