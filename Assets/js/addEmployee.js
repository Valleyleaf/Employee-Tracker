const inquirer = require('inquirer');
const chalk = require('chalk');

async function newEmployeePrompts(role, manager) {
console.log(chalk.bgGreen('Add New Employee to Database \n' ));
  const newEmployee = await inquirer.prompt([
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
      {
        type: 'list',
        name: 'employee_role',
        message: 'Employee Role: ',
        choices: role
      }
      // {
      //   type: 'list',
      //   name: 'manager_id',
      //   message: 'Manager: ',
      //   choices: manager
      // },
  ])

  const userInput = {
    first_name: newEmployee.first_name, 
    last_name: newEmployee.last_name, 
    role_id: newEmployee.employee_role,
    // manager_id: newEmployee.manager_id
    }
    console.log('in userInput', userInput)
  return userInput;
}

module.exports = newEmployeePrompts;
