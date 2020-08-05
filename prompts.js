// Dependencies
const inquirer = require("inquirer");
const mysql = require("mysql");

// =====================================================================

// Starting prompts
function startQuestions (){
    inquirer.prompt(
        [
        {
            type: "list",
            message: "What would you like to do?",
            name: "start",
            choices: [
                "View All Employees", 
                "View All Employees by Department", 
                "View All Employees by Manager", 
                "Add Employee", 
                "Remove Employee", 
                "Update Employee", 
                "Update Employee Role", 
                "Update Employee Manager", 
                "Quit"
            ],
        },
        ]
    )
    .then(function (reply) {
        if (reply.start === "View All Employees") {
            viewAllEmp();
        } else if (reply.start === "View All Employees by Department") {
            viewAllEmpDept();
        } else {
            quit();
        }
    });
}

// VIEW ALL EMPLOYEES
function viewAllEmp (){};

// VIEW ALL EMPLOYEES BY DEPT
function viewAllEmpDept (){};

// VIEW ALL EMPLOYEES BY MGR
function viewAllEmpMgr (){};

// ADD EMPLOYEE PROMPTS
function addEmpQuestions (){
    inquirer.prompt(
        [
        {
            type: "input",
            message: "Add new department title",
            name: "title",
        },
        {
            type: "confirm",
            message: "Would you like to add another employee?",
            name: "addnew",
        },
        ]
    )
    .then(function (userAddNew) {
        if (userAddNew.addnew === true) {
            deptQuestions();
        } else {
            roleQuestions();
        }
    });
}

// REMOVE EMPLOYEE
function removeEmp (){};

// UPDATE EMPLOYEE
function updateEmp (){};

// UPDATE EMPLOYEE ROLE
function updateEmpRole (){};

// UPDATE EMPLOYEE MANAGER
function updateEmpMgr (){};

// QUIT
function quit (){};

startQuestions();

// module.exports = prompts;