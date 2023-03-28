const connection = require("./connection");

class DB {
  // constructor(connection) {
  //   this.connection = connection;
  findAllEmployees() {
    retrun this.connection.promise().query(
      "SELECT employee.id, employee.first_name, employee.last_name, employee.role_title, employee.department, employee.salary, "
    )
  }




}