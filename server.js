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
app = express();

const mainValues = ({viewDepartments, viewEmployees, viewRoles, addDepartment, addEmployee, addRole})

const mainSelection = function mainPrompts(){
    inquirer
        .prompt([ 
            {
                type: 'list',
                message: 'Welcome.',
                name: 'selector',
                choices: 
                [
                    {
                    name: 'View all departments',
                    value: 'viewDepartments' 
                },
                {
                    name: 'View all employees',
                    value: 'viewEmployees' 
                },
                {
                    name: 'View all roles',
                    value: 'viewRoles' 
                },
                {
                    name: 'Add a Department',
                    value: 'addDepartment' 
                },
                {
                    name: 'Add a Employee',
                    value: 'addEmployee' 
                },
                {
                    name: 'Add a role',
                    value: 'addRole' 
                },
            ]
            }
        ]).then((input) => {
            console.log('Input is: ', input)
            const values = mainvalues;
            return values;
        });
};

mainSelection();