const {prompt} = require('inquirer');
const db = require('./db');
const { response } = require('express');

appStart();

function appStart() {
    console.log('App started');

    inquire();
}

function inquire() {
    prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'Make a selection',
            choices: [
                {
                    name: 'Select all employees',
                    value: 'SELECT_ALL_EMPLOYEES'
                },
                {
                    name: 'Select employees by department',
                    value: 'SELECT_EMPLOYEES_BY_DEPARTMENT'
                },
                {
                    name: 'Select employees by manager',
                    value: 'SELECT_EMPLOYEES_BY_MANAGER'
                },
                {
                    name: 'Create employee',
                    value:'CREATE_EMPLOYEE'
                },
                {
                    name: 'Delete employee',
                    value: 'DELETE_EMPLOYEE'
                },
                {
                    name: 'Update employee job',
                    value: 'UPDATE_EMPLOYEE_JOB'
                },
                {
                    name: 'Update manager',
                    value: 'UPDATE_MANAGER'
                },
                {
                    name: 'Select all jobs',
                    value: 'SELECT_ALL_JOBS'
                },
                {
                    name: 'Create job',
                    value: 'CREATE_JOB'
                },
                {
                    name: 'Select all departments',
                    value: 'SELECT_ALL_DEPARTMENTS'
                },
                {
                    name: 'Create department',
                    value: 'CREATE_DEPARTMENT'
                },
                {
                    name: 'Delete Department',
                    value: 'DELETE_DEPARTMENT'
                },
                {
                    name: 'Goodbye',
                    value: 'TERMINATE_APP'
                }
            ]
        }
    ]).then(res => {
        let choice = res.choice;

        switch (choice) {
            case 'SELECT_ALL_EMPLOYEES':
                selectAllEmployees();
                break;
            case 'SELECT_EMPLOYEES_BY_DEPARTMENT':
                selectEmployeesByDept();
                break;
            case 'SELECT_EMPLOYEES_BY_MANAGER':
                selectEmployeesByManager();
                break;
            case 'CREATE_EMPLOYEE':
                createEmployee();
                break;
            case 'DELETE_EMPLOYEE':
                deleteEmployee();
                break;
            case 'UPDATE_EMPLOYEE_JOB':
                updateEmployeeJob();
                break;
            case 'UPDATE_MANAGER':
                updateManager();
                break;
            case 'SELECT_ALL_JOBS':
                selectAllJobs();
                break;
            case 'CREATE_JOB':
                createJob();
                break;
            case 'SELECT_ALL_DEPARTMENTS':
                selectAllDepts();
                break;
            case 'CREATE_DEPARTMENT':
                createDept();
                break;
            case 'DELETE_DEPARTMENT':
                deleteDept();
                break;
            case 'SELECT_DEPARTMENT_BUDGET':
                selectDeptBudget();
                break;
            case 'TERMINATE_APP':
                terminateApp();
                break;
             
        }
    })
}

function selectAllEmployees() {
    db.findEmployees()
    .then(([tableRow]) => {
        let employee = tableRow;
        console.log('\n');
        console.table(employee);
    })
     .then(() => inquire());
}

function selectEmployeesByDept() {
    db.allDepts().then(([tableRow]) => {
        let dept = tableRow;
        const deptChoices = dept.map(({id, name}) => ({
            name: name,
            value:id
        }));

        prompt([
            {
                type: 'list',
                name: 'deptId',
                message: 'what department would you like to see?',
                choices: deptChoices
            }
        ])
         .then(res => db.employeesByDept(res.deptId))
         .then(([tableRow]) => {
            let employees = tableRow;
            console.log('\n');
            console.table(employees);
         })
         .then(() => inquire());
    });
}

function selectEmployeesByManager() {
    db.findEmployees()
      .then(([tablerows]) => {
        let manager = tablerows;
        const managerChoices = manager.map(({ id, first_name, last_name }) => ({
          name: `${first_name} ${last_name}`,
          value: id
        }));
  
        prompt([
          {
            type: "list",
            name: "managerId",
            message: "Whose employees would you like to see?",
            choices: managerChoices
          }
        ])
          .then(res => db.describeDeptByManager(res.managerId))
          .then(([tableRow]) => {
            let employees = tableRow;
            console.log("\n");
            if (employees.length === 0) {
              console.log("This employee does not have a manager.");
            } else {
              console.table(employees);
            }
          })
          .then(() => inquire())
      });
  }

function createEmployee() {
prompt([
    {
        name: 'first_name',
        message: `Enter employee's first name.`
    },
    {
        name: 'last_name',
        message: `Enter employee's last name.`
    }
])
    .then(res => {
        let firstName = res.first_name;
        let lastName = res.last_name;

        db.allJobs()
        .then(([tableRow]) => {
            let job = tableRow;
            const jobChoice = job.map(({id, title}) => ({
                name: title,
                value: id
            }));
            prompt({
                type: 'list',
                name: 'jobId',
                message: "What is the employee's job?",
                choices: jobChoice
            })
            .then(res => {
                let jobId = res.jobId;
                db.findEmployees()
                .then(([tableRow]) => {
                    let employee = tableRow;
                    const managerChoice = employee.map(({id, firstName, lastname}) => ({
                        name: `${firstName} ${lastname}`,
                        value: id
                    }));

                    managerChoice.unshift({name: 'none', value: null});

                    prompt({
                        type: "list",
                        name: "managerId",
                        message: "Who is the employee's manager?",
                        choices: managerChoice
                      })
                      .then(res => {
                        let employee = {
                            manager_id: res.managerId,
                            job_id: jobId,
                            first_name: firstName,
                            last_name: lastName
                        }

                        db.newEmployee(employee)
                      })
                      .then(() => console.log(
                        `Employee ${firstName} ${lastName} has been created.`
                      ))
                      .then(() => inquire())
                })
            })
        })
    })
}



function deleteEmployee() {

}

function updateEmployeeJob() {

}

function selectAllJobs(){

}

function createJob() {

}

function selectAllDepts() {

}

function createDept() {

}

function deleteDept() {

}

function terminateApp() {

}