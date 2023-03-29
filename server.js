require ("dotenv").config();
const mysql = require("mysql2");

const db = require("./db/connection");
const inquirer = require("inquirer");

const menuOptions = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "options",
        message: "What do you want now?",
        choices: [
          {
            name: "View All Employees",
            value: "VIEW_ALL_EMPLOYEES"
          },          
          {
            name: "Add Employee",
            value: "ADD_EMPLOYEE"
          },
          {
            name: "Remove Employee",
            value: "REMOVE_EMPLOYEE"
          },
          {
            name: "View All Roles",
            value: "VIEW_ALL_ROLES"
          },
          {
            name: "Update Employee Role",
            value: "UPDATE_EMPLOYEE_ROLE"
          },
          {
            name: "Update Employee Manager",
            value: "UPDATE_EMPLOYEE_MANAGER"
          },
          {
            name: "Add Role",
            value: "ADD_ROLE"
          },
          {
            name: "Remove role",
            value: "REMOVER_ROLE"
          },
          {
            name: "View All Departments",
            value: "VIEW_ALL_DEPARTMENTS"
          },          
          {
            name: "Quit",
            value: "QUIT",
          },
        ],
      },
    ]).then(res => {
      let options = res.options;
      switch (options) {
        case "VIEW_All_EMPLOYEES":
          viewAllEmployees();
          break;
        case "ADD_EMPLOYEE":
          addEmployee();
          break;
        case "REMOVE_EMPLOYEE":
          removeEmployee();
          break;  
        case "VIEW_ALL_ROLES":
          viewAllRoles();
          break;  
        case "UPDATE_EMPLOYEE_ROLE":
          updateEmployeeRole();
          break;
        case "ADD_ROLE":
          addRole();
          break;
        case "REMOVER_ROLE":
          removeRole();
          break;
        case "VIEW_ALL_DEPARTMENTS":
          viewAllDepartments();
          break;
      }
    })
}
// view all employees

async function viewAllEmployees() {
  try {
    const [rows] = await db.findAllEmployees();
    const employees = rows;
    console.log("\n");
    console.table(employees);
    await menuOptions();
  } catch (error) {
    console.error(error);
  }
}

// update employee role
async function updateEmployeeRole() {
  try {
    const [employeeRows] = await db.findAllEmployees();
    const employees = employeeRows;
    const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
      name: `${first_name} ${last_name}`,
      value: id
    }));

    const { employeeId } = await prompt([
      {
        type: "list",
        name: "employeeId",
        message: "Who's role do you want to update?",
        choices: employeeChoices
      }
    ]);

    const [roleRows] = await db.findAllRoles();
    const roles = roleRows;
    const roleChoices = roles.map(({ id, title }) => ({
      name: title,
      value: id
    }));

    const { roleId } = await prompt([
      {
        type: "list",
        name: "roleId",
        message: "What is the employee's updated role?",
        choices: roleChoices
      }
    ]);

    await db.updateEmployeeRole(employeeId, roleId);
    console.log("Updated employee's role");
    await menuOptions();
  } catch (error) {
    console.error(error);
  }
}
// view roles
async function viewAllRoles() {
  try {
    const [rows] = await db.viewAllRoles();
    const roles = rows;
    console.log("\n");
    console.table(roles);
    await menuOptions();
  } catch (error) {
    console.error(error);
  }
}
  
// Add employee
async function addEmployee() {
  try {
    const employee = await prompt([
      {
        name: "first_name",
        message: "What is the employee's first name?",
      },
      {
        name: "last_name",
        message: "What is the employee's last name?",
      },
    ]);

    const roles = await db.findAllRoles();
    const roleChoices = roles[0].map(({ id, title }) => ({
      name: title,
      value: id,
    }));

    const { roleId } = await prompt({
      type: "list",
      name: "roleId",
      message: "What is the employee's role?",
      choices: roleChoices,
    });

    const employees = await db.findAllEmployees();
    const managerChoices = employees[0].map(({ id, first_name, last_name }) => ({
      name: `${first_name} ${last_name}`,
      value: id,
    }));

    managerChoices.unshift({ name: "None", value: null });

    const { managerId } = await prompt({
      type: "list",
      name: "managerId",
      message: "Who is the employee's manager?",
      choices: managerChoices,
    });

    const newEmployee = {
      manager_id: managerId,
      role_id: roleId,
      first_name: employee.first_name,
      last_name: employee.last_name,
    };

    await db.createEmployee(newEmployee);
    console.log(`Added ${newEmployee.first_name} ${newEmployee.last_name} to the database`);
    await menuOptions();
  } catch (error) {
    console.error(error);
  }
}

async function addDepartment() {
  try {
    const department = await prompt([
      {
        name: "name",
        message: "New department's name?",
      },
    ]);
    const name = res.name;
    await db.createDepartment(name);
    console.log(`Added ${name} to the database`);
    await menuOptions();
  } catch (error) {
    console.error(error);
  }
}

function quit(){
  console.log("Back to Work!");
  process.exit();
}