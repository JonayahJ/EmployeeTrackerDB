// Dependencies
const inquirer = require("inquirer");
const mysql = require("mysql");
const connection = require("./app");

// =====================================================================
// starting questions
const viewAllArr=[
    "View All Employees",
    "View All Departments",
    "View All Positions", 
    "View All Employees by Department", 
    "View All Employees by Position",
    // "View All Employees by Manager", 
    // "View Department Budgets", 
    "Add Employee", 
    "Remove Employee",
    // "Remove Department",
    "Remove Position", 
    "Update Employee", 
    "Update Employee Role", 
    // "Update Employee Manager",
    "Quit"
];

// Starting prompts
function startQuestions (){
    inquirer.prompt(
        [
        {
            type: "list",
            message: "What would you like to do?",
            name: "start",
            choices: viewAllArr,
        },
        ]
    )
    .then(function (reply) {
        if (reply.start === "View All Employees") {
            viewAllEmp();
        } else if (reply.start === "View All Departments") {
            viewAllDept();
        } else if (reply.start === "View All Positions") {
            viewAllPos();
        } else if (reply.start === "View All Employees by Department") {
            viewAllEmpDept();
        } else if (reply.start === "View All Employees by Position") {
            viewAllEmpPos();
        } else if (reply.start === "View All Employees by Manager") {
            viewAllEmpMgr();
        } else if (reply.start === "View Department Budgets") {
            viewBudget();
        } else if (reply.start === "Add Employee") {
            addEmployee();
        } else if (reply.start === "Remove Employee") {
            removeEmp();
        } else if (reply.start === "Remove Department") {
            removeDept();
        } else if (reply.start === "Remove Position") {
            removePos();
        } else if (reply.start === "Update Employee") {
            updateEmp();
        } else if (reply.start === "Update Employee Role") {
            updateEmpRole();
        } else if (reply.start === "Update Employee Manager") {
            updateEmpMgr();
        } else {
            quit();
        }
    });
}

// VIEW ALL EMPLOYEES
function viewAllEmp (){
    // connect to server and throw error if there is one
    connection.query("SELECT * FROM employees", function(err, res) {
        if (err) throw err;
        // show data in table in console
        console.table(res);
        // back to the top
        startQuestions();
    });
};

// VIEW ALL DEPARTMENTS
function viewAllDept (){
    // connect to server and throw error if there is one
    connection.query("SELECT * FROM department", function(err, res) {
        if (err) throw err;
        // show data in table in console
        console.table(res);
        // back to the top
        startQuestions();
    });
};

// VIEW ALL POSITIONS
function viewAllPos (){
    // connect to server and throw error if there is one
    connection.query("SELECT * FROM positions", function(err, res) {
        if (err) throw err;
        // show data in table in console
        console.table(res);
        // back to the top
        startQuestions();
    });
};

function findEmployeeById(id){
    //connection to mysql do findall by id
}

// VIEW ALL EMPLOYEES BY DEPT
function viewAllEmpDept (){
    inquirer.prompt([{
        type: "list",
        message: "Choose the new employee's department:",
        name: "department",
        choices: [
            "1-Command",
            "2-Operations",
            "3-Science",
            "4-Personnel"
        ]
    }])
    // show the departments
    .then(function (reply) {
        if (reply.department === "1-Command"){
            connection.query("SELECT employees.designation, employees.first_name, employees.last_name,department.name AS department FROM employees JOIN positions ON positions.id = employees.positions_id JOIN department ON department.id = positions.dept_id WHERE dept_id = 1", function (err, res) {
                if (err) throw err;
                console.table(res);
                startQuestions();
              });
        } else if (reply.department === "2-Operations"){
            connection.query("SELECT employees.designation, employees.first_name, employees.last_name,department.name AS department FROM employees JOIN positions ON positions.id = employees.positions_id JOIN department ON department.id = positions.dept_id WHERE dept_id = 2", function (err, res) {
                if (err) throw err;
                console.table(res);
                startQuestions();
            });
        } else if (reply.department === "3-Science"){
            connection.query("SELECT employees.designation, employees.first_name, employees.last_name,department.name AS department FROM employees JOIN positions ON positions.id = employees.positions_id JOIN department ON department.id = positions.dept_id WHERE dept_id = 3", function (err, res) {
                if (err) throw err;
                console.table(res);
                startQuestions();
            });
        } else {
            connection.query("SELECT employees.designation, employees.first_name, employees.last_name,department.name AS department FROM employees JOIN positions ON positions.id = employees.positions_id JOIN department ON department.id = positions.dept_id WHERE dept_id = 4", function (err, res) {
                if (err) throw err;
                console.table(res);
                startQuestions();
            });
        }
    });
};

// VIEW ALL EMPLOYEES BY MGR
function viewAllEmpMgr (){};

// VIEW BUDGET BY DEPARTMENT
// function viewBudget (){};

// ADD EMPLOYEE PROMPTS
function addEmployee (){
    inquirer.prompt(
        [
        {
            type: "input",
            message: "Enter the new employee's rank:",
            name: "designation",
        },
        {
            type: "input",
            message: "Enter the new employee's first name:",
            name: "first_name",
        },
        {
            type: "input",
            message: "Enter the new employee's last name:",
            name: "last_name",
        },
        {
            type: "list",
            message: "Choose the new employee's department: [1-Command], [2-Operations], [3-Science], [4-Personnel]",
            name: "department",
            choices: ["1", "2", "3", "4"]
        },
        {
            type: "list",
            message: "Choose the new employee's manager: [1-Capt. Picard], [2-Commander Riker], [3-Lt. Commander Geordi], [4-Lt. Worf], or [5-Dr. Crusher]",
            name: "manager",
            choices: ["1", "2", "3", "4", "5"]
        },
        ]
    )
    // INSERT INTO employee SET ?
    .then(function (answer){
        
        console.log("Inserting new employee...\n");
        const query = connection.query("INSERT INTO employees (designation, first_name, last_name, positions_id, manager_id) VALUES (?, ?, ?, ?, ?)",
        [answer.designation, answer.first_name, answer.last_name, answer.department, answer.manager],
        function (err, res) {
          if (err) throw err;
          console.table(res);
          startQuestions();
          }
        )
    })
};

// REMOVE EMPLOYEE
function removeEmp (){};

// REMOVE DEPARTMENT
// function removeDept (){};

// REMOVE POSITION
function removePos (){};

// UPDATE EMPLOYEE
function updateEmp (){};

// UPDATE EMPLOYEE ROLE
function updateEmpRole (){};

// UPDATE EMPLOYEE MANAGER
// function updateEmpMgr (){};

// QUIT
function quit (){};

startQuestions();