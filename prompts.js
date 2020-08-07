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
    "Add Employee",
    "Add Position", 
    "Add Department",
    "Update Employee", 
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
        } else if (reply.start === "Add Employee") {
            addEmployee();
        } else if (reply.start === "Add Position") {
            addPosition();
        } else if (reply.start === "Add Department") {
            addDepartment();
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
            type: "input",
            message: "Choose the new employee's department: [1] for Command, [2] for Operations, [3] for Science, [4] for Personnel, and [n] for any other additional departments",
            name: "department",
            // choices: ["1", "2", "3", "4"]
        },
        {
            type: "input",
            message: "Choose the new employee's manager: [1] for Capt. Picard, [2] for Commander Riker, [3] for Lt. Commander Geordi, [4] for Lt. Worf, [5] for Dr. Crusher, or [n] for any other additional manager",
            name: "manager",
            // choices: ["1", "2", "3", "4", "5"]
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

function addPosition (){
    inquirer.prompt(
        [
        {
            type: "input",
            message: "Enter the new position title:",
            name: "title",
        },
        {
            type: "input",
            message: "Enter the salaray for the new positions:",
            name: "salary",
        },
        {
            type: "input",
            message: "Input the department of the new position: [1] for Command, [2] for Operations, [3] for Science, [4] for Personnel, or [n] for other any other new department",
            name: "dept_id",
        },
        ]
    )
    // INSERT INTO position SET ?
    .then(function (answer){
        console.log("Inserting new position...\n");
        const query = connection.query("INSERT INTO positions (title, salary, dept_id) VALUES (?, ?, ?)",
        [answer.title, answer.salary, answer.dept_id],
        function (err, res) {
          if (err) throw err;
          console.table(res);
          startQuestions();
          }
        )
    })
};

function addDepartment (){
    inquirer.prompt(
        [
        {
            type: "input",
            message: "Enter the new department name:",
            name: "name",
        },
        ]
    )
    // INSERT INTO department SET ?
    .then(function (answer){
        console.log("Inserting new department...\n");
        const query = connection.query("INSERT INTO department (name) VALUES (?)",
        [answer.name],
        function (err, res) {
          if (err) throw err;
          console.table(res);
          startQuestions();
          }
        )
    })
};

// UPDATE EMPLOYEE
function updateEmp (){
    // finding employees
    const employeeArr = [];

    connection.query("SELECT * FROM employees", function (err, res) {
        if (err) throw err;
        // loop thru the employees
        for (var i = 0; i < res.length; i++) {
            employeeArr.push(res[i].designation + " " + res[i].first_name + " " + res[i].last_name+ " " + res[i].positions_id + " " + res[i].manager_id);
          }
        // console.log(employeeArr)
    })
    //ask questions
    inquirer.prompt(
        [
        {
            type: "list",
            message: "Which employee do you want to update?",
            choices: employeeArr,
            name: "employee",
        },
        {
            type: "input",
            message: "Update the employee's rank:",
            name: "designation",
        },
        {
            type: "input",
            message: "Update the employee's first name:",
            name: "first_name",
        },
        {
            type: "input",
            message: "Update the employee's last name:",
            name: "last_name",
        },
        {
            type: "input",
            message: "Input the employee's department: [1] for Command, [2] for Operations, [3] for Science, [4] for Personnel, and [n] for any other additional departments",
            name: "department",
            // choices: ["1", "2", "3", "4"]
        },
        {
            type: "input",
            message: "Input the new employee's manager: [1] for Capt. Picard, [2] for Commander Riker, [3] for Lt. Commander Geordi, [4] for Lt. Worf, [5] for Dr. Crusher, or [n] for any other additional manager",
            name: "manager",
            // choices: ["1", "2", "3", "4", "5"]
        },
        ]
    )
    // UPDATE employee SET ? WHERE ?
    .then(function (answer){
    const query = connection.query(
        "UPDATE employees SET ? WHERE ?",
        [
            {
                designation: answer.designation,
            },
            {
                first_name: answer.first_name,
            },
            {
                last_name: answer.last_name,
            },
            {
                department: answer.dept_id,
            },
            {
                manager: answer.manager_id,
            },
        ],
        function (err, res) {
          if (err) throw err;
          console.table(res);
          startQuestions();
        }
      );
})};


// QUIT
function quit (){
    // exit connection
    connection.end();
};

startQuestions();