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
// ------------------------------------------------------------------------------------------------------------------
// Set up api's and middleware to handle requests.
const inquirer = require('inquirer');
const express = require('express');
const chalk = require('chalk');
const mysql = require('mysql2');
const fs = require('fs');
const { prompt } = require("inquirer");
const sequelize = require('./Assets/router/connections');
// Why do I need sequelize again? Dunno but if I remove it, my code stops working.
//  const addEmployee = require('./Assets/js/addEmployee');
const mainMenuInput = require('./index');
app = express();
// Is app needed here or did you add it just because?

const PORT = process.env.PORT || 3001;
const db = require('./db/db.js')


// ------------------------------------------------------------------------------------------------------------------

async function main(){
    console.log(chalk.bgRed('Welcome to the Employee Directory \n' ));
    let viewOrAddValue = await mainMenuInput()
    viewOrAdd(viewOrAddValue)
};

async function next(){
    const input = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'confirmation',
        message: 'Return to main menu?',
      }
    ])
    .then((answers) => {
      if (answers.confirmation) {
        main();
      } else {
        process.exit(0);
      }
    });
    
}
//The above function is a little bit of a cheat. I wanted to give the user some respite when they searched something
// rather then it jumping back to the main menu. Google told me to use 'readline' but I didn't feel like importing
// more modules. So instead, the user will recieve the option to return to main menu or exit out of the application.

//The main function creates a title and then goes straight into mainSelection. Once a selection has been made. It will go to the router middleware
// Which will determine where the user will be sent.

// Below function checks value of vieworAddValue which equals the users input. Making it match a name rather than a number
// would be better for future development, but since I know this will not be expanded upon, this will do fine for now.
// I'm using data as a general pass-term. Is this a bad idea?
async function viewOrAdd(data){
    switch (data) {
        case 'department':
        case 'employee':
        case 'roles':
          view(data);
          break;
// ----> View Above, Add Below <----
        case 'addDepartment':
          addDepartment(data);
          break;

        case 'addEmployee':
          addNewEmployee(data);
          break;

        case 'addRole':
          addRole(data);
          break;

        default:
          console.log(data,'Invalid input');
          break;
      }
      
  };

function view(data){
    db.query(`SELECT * FROM ${data}`, function (err, results) {
      if (err){
        console.log(err)
      }else
        console.table(results);
        next();
      });
}
// Make tableName into a seperate variable based on data. Do if statement here? Seems kinda ridged.

//Write funciton viewDepartment. 'SELECT department.di,department.name 

function removeEmployee (employeeId) {
  //  DELETE FROM employee where id = ?;
  // employeeId
}

async function addDepartment(data){
    prompt([
      {
        type: 'input',
        name: 'department',
        message: 'Department Name: ',
      },
      {

      }
    ])
}


function addNewEmployee(data) {
  prompt ([
    {
      type: 'input',
      name: 'first_name',
      message: 'First Name: ',
    },
    {
        type: 'input',
        name: 'last_name',
        message: 'Last Name: ',
      },
  ]).then( res =>{
    let firstName = res.firstName;
    let lastName = res.lastName;
    const sql = `SELECT roles.id, roles.title, department.name AS department, roles.salary FROM roles LEFT JOIN department on roles.department_id = department.id`
    db.query(sql, res,(error,result)=>{
        const rolesChoices = result.map(role => ({
          name:`${role.title} (${role.department}, Salary:${role.salary})`,
          value: role.id
        }))
        prompt([{
            type: 'list',
            name: 'Role_Id',
            message: 'select role: ',
            choices: rolesChoices
        }]).then( roleResult =>{
          const newEmployeeWithRoles = {
            first_name:res.first_name,
            last_name:res.last_name,
            role_id: roleResult.Role_Id
          };
          const insertSql = "INSERT INTO employee SET ?";
          db.query(insertSql, newEmployeeWithRoles, (err, res)=>{
            if (err){
              console.log(err)
            }else{
              console.log('we added a new employee')
              next();
            }
          })
        })
      })
  })
}

 function addRole(data){

}

  main()
