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
  ])
  const userInput = input.selector;
  return userInput;
}

module.exports = mainPrompts;
