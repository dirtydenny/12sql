const connection = require("./connection");

class DB {
  // constructor(connection) {
  //   this.connection = connection;
  findAllEmployees() {
    retrun this.connection.promise().query(
      "SELECT employee.id, employee.first_name, employee.last_name, employee.role_title, employee.department, employee.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM emplyee LEFT JOIN role on employee.role_id =role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager.id;"
    );
  }
  // create, update and delete employee
  createEmployee(employee) {
    return this.comnection.promise().query(
      "INSERT INTO employee SET ?", employee
      );
  }
  updateEmployeeRole(employeeId, roleId) {
    return this.connection.promise().query(
      "UPDATE employee SET role_id = ? WHERE is = ?",
      [roleId, employeeId]
    )
  }
  removeEmployee(employee) {
    return this.connection.promise().query(
      "DELETE FROM employee WHERE id = ?",
      employeeId
      );
    }
    // view, create and delete department
  viewAllDepartments() {
      return this.connection.promise().query(
        "SELECT department.id, department.name FROM department"
      );
    }
  createDepartment(department) {
    return this.connection.promise().query(
      "INSERT INTO department SET ?",
      department
      );
  }
  removeDepartment(departmentId) {
    return this.connection.promise().query(
      "DELETE FROM department WHERE id = ?",
      departmentId
      );
  }
  //Add and delete roles
  findAllRoles() {
    return this.connection.promise().query(
      "SEELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT Join department on role.department_id = department.id;"
    )
  }

  createRole(role) {
    return this.connection.promise().query(
      "INSERT INTO role SET ?",
      role
    );
  }
  removeRole(roleId) {
    return this.connection.promise().query(
      "DELETE FROM role WHERE id = ?",
      roleId
      );
    }
} 
module.exports = new DB(connection);