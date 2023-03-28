require ("dotenv").config();
const mysql = require("mysql2");

const db = require("./db/connection");
const inquirer = require("inquirer");

const menuOptions = () => {
  inquirer.prompt([
    {
      type:
      message:
      name: "options"
      choices: 
    }
  ]).then((answers) => {
 })
}