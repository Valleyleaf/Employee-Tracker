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
const fs = require('fs');
app = express();


async function main(){
    console.log(chalk.bgRed('Welcome to the Employee Directory \n' ));
    const userSelection = mainSelection();
    
};
//The main function creates a title and then goes straight into mainSelection. Once a selection has been made. It will go to the router middleware
// Which will determine where the user will be sent.


const mainSelection = function mainPrompts(){
    inquirer
        .prompt([ 
            {
                type: 'list',
                message: 'Please enter a Selection.',
                name: 'selector',
                choices: 
                [
                    {
                    name: 'View all departments',
                    value: 1, 
                },
                {
                    name: 'View all employees',
                    value: 2,
                },
                {
                    name: 'View all roles',
                    value: 3, 
                },
                {
                    name: 'Add a Department',
                    value: 4,
                },
                {
                    name: 'Add a Employee',
                    value: 5,
                },
                {
                    name: 'Add a role',
                    value: 6,
                },
            ]
            }
        ]).then((input) => {
                const userInput = input.selector;
                if(userInput < 3){
                    console.log('Go to view')
                }else{
                    console.log('Go to add')
                }
                // The above checks to see if the user wants to view or add something. This will then tie into two seperate functions.
                // These functions will then return values based on specifics.
        });
};

main();