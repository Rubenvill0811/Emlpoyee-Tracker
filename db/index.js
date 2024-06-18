const connection = require('./connection');

class DB {
    constructor(connection) {
        this.connection = connection;
    }

findEmployees() {
    return this.connection.promise().query(
        `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"`
    );
}

employeesByDept(deptId) {
    return this.connection.promise().query(
        `SELECT employee.id, employee.first_name, employee.last_name, role.title FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department department on role.department_id = department.id WHERE department.id = ?;`, deptId
    );
}

findManagers(managerId) {
return this.connection.promise().query(
    `SELECT id, first_name, last_name FROM employee WHERE id != ?`, managerId
);
}

newEmployee(newEmployee) {
    return this.connection.promise().query(
        `INSERT INTO employee SET ?`, newEmployee
    );
}

deleteId(employeeId) {
    return this.connection.promise().query(
        `DELETE FROM employee WHERE id = ?`, employeeId
    );
}

updateJob(employeeId, jobId) {
    return this.connection.promise().query(
        `UPDATE employee SET role_id = ? WHERE id = ?`, employeeId, jobId
    );
}

allJobs() {
return this.connection.promise().query(
    `SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;`
);
}

newJob(job) {
return this.connection.promise().query(
    `INSERT INTO role SET ?`, job
);
}

deleteJob(job) {
    return this.connection.promise().query(
        `DELETE FROM role WHERE id = ?`, job
    );
}

allDepts() {
    return this.connection.promise().query(
        `SELECT department.id, department.name FROM department;`
    );
}

newDept(dept) {
    return this.connection.promise().query(
        `INSERT INTO department SET ?`, dept
    );
}

deleteDept(dept) {
    return this.connection.promise().query(
        `DELETE FROM department WHERE id = ?`, dept
    );
}

describeDept(dept) {
return this.connection.promise().query(
    `SELECT employee.id, employee.first_name, employee.last_name, role.title FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department department on role.department_id = department.id WHERE department.id = ?;`, dept
);
}

describeDeptByManager(manager) {
    return this.connection.promise().query(
        `SELECT employee.id, employee.first_name, employee.last_name, department.name AS department, role.title FROM employee LEFT JOIN role on role.id = employee.role_id LEFT JOIN department ON department.id = role.department_id WHERE manager_id = ?;`, manager
    );
}

}

module.exports = new DB(connection);