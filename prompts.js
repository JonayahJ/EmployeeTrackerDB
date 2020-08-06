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
    //we need to grab all department.id
    //ask user which department you want to look at
    // get all from department from mysql first so we get an array ( id)//
    //**which dept_id are you looking for 
      // clean up late run forloop on the dept_id for user to choose 
      //really make it good map key value pair of id and dept name
    //**findallemployees by the departmentid
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
    connection.query("SELECT * FROM employees ", function(err, res){
        if (err) throw (err);
        console.table(res);
        startQuestions();
    })
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
            message: "Choose the new employee's department:",
            name: "department",
            choices: [
                "1-Command",
                "2-Operations",
                "3-Science",
                "4-Personnel"
            ]
        },
        {
            type: "list",
            message: "Choose the new employee's manager:",
            name: "manager",
            choices: [
                "1-Capt. Picard",
                "2-Commander Riker",
                "3-Lt. Commander Geordi",
                "4-Lt. Worf",
                "5-Dr. Crusher"
            ]
        },
        {
            type: "confirm",
            message: "Would you like to add another employee?",
            name: "addnew",
        },
        ]
    )
    // INSERT INTO employee SET ?
    .then(function (){
        //do a findallby employee fx which gets data from mysql (this returns an array)
        //make this a beautiful array deptidArr
        //use inquirer
        //choices:deptidArr
        console.log("Inserting new employee...\n");
        const query = connection.query("INSERT INTO employees SET ?", {
            first_name: first_name,
            last_name: last_name,
            // dept_id,
            // manager_id
        })
    })

    // add new employee?
    .then(function (userAddNew) {
        if (userAddNew.addnew === true) {
            addEmployee();
        } else {
            startQuestions();
        }
    });
}

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