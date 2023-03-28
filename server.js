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
          // {
          //   name: "View All Employees By Department",
          //   value: "VIEW_ALL_EMPLOYEES_BY_DEPARTMENT"
          // },
          // {
          //   name: "View All Employees By Manager",
          //   value: "VIEW_EMPLOYEES_BY_MANAGER"
          // },          
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
          // {
          //   name: "Update Employee Manager",
          //   value: "UPDATE_EMPLOYEE_MANAGER"
          // },
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
          // {
          //   name: "View Total Utilized Budget By Department",
          //   value: "VIEW_UTILIZED_BUDGET_BY_DEPARTMENT"
          // },
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
          addEmployee():
          break;
        case "REMOVE_EMPLOYEE":
          removeEmployee():
          break;  
        case "VIEW_ALL_ROLES":
          viewAllRoles():
          break;  
        case "UPDATE_EMPLOYEE_ROLE":
          updateEmployeeRole():
          break;
        case "ADD_ROLE":
          addRole():
          break;
        case "REMOVER_ROLE":
          removeRole():
          break;
        case "VIEW_ALL_DEPARTMENTS":
          viewAllDepartments():
          break;
      }
    })
}
function viewAllEmployees() {
  db.findAllEmployees()
  .then(([rows]) => {
    let employees = rows;
    console.log("\n");
    console.table(employees);
  })
  .then(() => menuOptions());
}