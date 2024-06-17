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
                    name: 'Select department budget',
                    value: 'SELECT_DEPARTMENT_BUDGET'
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

}

function selectEmployeesByDept() {

}

function selectEmployeesByManager() {

}

function createEmployee() {

}

function deleteEmployee() {

}

function updateEmployeeJob() {

}

function updateManager() {

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

function selectDeptBudget() {

}

function terminateApp() {
    
}