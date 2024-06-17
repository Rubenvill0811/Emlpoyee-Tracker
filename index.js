const {prompt} = require('inquirer');
const db = require('./db');

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
                    value: 'SELECT_EMPLOYEES'
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
                    name: 'Select all roles',
                    value: 'SELECT_ALL_ROLES'
                },
                {
                    name: 'Create role',
                    value: 'CREATE_ROLE'
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
                    name: 'Select department budget',
                    value: 'SELECT_DEPARTMENT_BUDGET'
                },
                {
                    name: 'Goodbye',
                    value: 'TERMINATE_APP'
                }
            ]
        }
    ]).then()






}