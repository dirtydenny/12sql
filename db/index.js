const connection = require("./connection");

class DB {
  // constructor(connection) {
  //   this.connection = connection;
  findAllEmployees() {
    retrun this.connection.promise().query(
      "SELECT employee.id, employee.first_name, employee.last_name, employee.role_title, employee.department, employee.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM emplyee LEFT JOIN role on employee.role_id =role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager.id;"
    );
  }





} 