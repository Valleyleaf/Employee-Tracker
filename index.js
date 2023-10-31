// This index will take the users input and parse it to move the user to the correct selection.

const inquirer = require('inquirer');

async function mainPrompts() {
  const input = await inquirer.prompt([
    {
      type: 'list',
      message: 'Please enter a Selection.',
      name: 'selector',
      choices: [
        {
          name: 'View all departments',
          value: 'department',
        },
        {
          name: 'View all employees',
          value: 'employee',
        },
        {
          name: 'View all roles',
          value: 'roles',
        },
        {
          name: 'Add a Department',
          value: 'addDepartment',
        },
        {
          name: 'Add a Employee',
          value: 'addEmployee',
        },
        {
          name: 'Add a role',
          value: 'addRole',
        },
      ]
    }
  ])
  const userInput = input.selector;
  return userInput;
}

module.exports = mainPrompts;
