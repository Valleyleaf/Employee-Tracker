// This index will take the users input and parse it to move the user to the correct selection.


function userChoice(value) {
    switch (value) {
      case "viewDepartments":
        return "VALUE VIEWDEPARTMENTS";
      case "viewEmployees":
        return "VALUE VIEWEMPLOYEES.";
      case "viewRoles":
        return "VALUE VIEWROLES";
      case "addDepartment":
        return "VALUE ADD DEPARTMENTS";
      case "addEmployee":
        return "VALUE ADD EMPLOYEE";
      case "addRole":
        return "VALUE ADD ROLE";
      default:
        return "Invalid Selection";
    }
  }
  
  module.exports = userChoice;

// Don't think i need this either? I can do the entire project on my server.js... but I want to be modular.

// Do I add all of my remaining functions here or do I split them up?

// Thinking I will have all the view functions in one spot and then my add functions in another. Could make it very
// <<MODULAR>> that way.