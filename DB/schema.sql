-- Drops the emptrack_db if it exists currently --
DROP DATABASE IF EXISTS employeeDB;

-- Creates the "employeeDB" database --
CREATE DATABASE employeeDB;

-- Makes it so all of the following code will affect employeeDB --
USE employeeDB;

-- Creates the table "people" within employeeDB --
CREATE TABLE department (
    -- add an auto incrementing id as the primary key
    id INT AUTO_INCREMENT NOT NULL,
    -- add name of department
    name VARCHAR(30) NOT NULL,
    -- state the primary key
    PRIMARY KEY (id)
);

CREATE TABLE positions (
    -- add an auto incrementing id as the primary key
    id INT AUTO_INCREMENT NOT NULL,
    -- add title to hold role position
    title VARCHAR(30) NOT NULL,
    -- add salary
    salary DECIMAL(10,2) NOT NULL,
    -- add department_id to reference the deparament the role belongs to (connect back to dept table)
    dept_id INTEGER,
    -- state the primary key
	PRIMARY KEY (id),
    FOREIGN KEY (dept_id) REFERENCES department(id)
);

CREATE TABLE employees (
    -- add an auto incrementing id as the primary key
    id INT AUTO_INCREMENT NOT NULL,
    -- add title of employee
    designation VARCHAR(30) NULL,
    -- add first_name of employee
    first_name VARCHAR(30) NOT NULL,
    -- add last_name of employee
    last_name VARCHAR(30),
    -- add position_id to reference the position the employee has (connect to position table)
	positions_id INT,
    -- manager id
    manager_id INT,
    -- state the primary key
    PRIMARY KEY (id),
	FOREIGN KEY (positions_id) REFERENCES positions(id),
    FOREIGN KEY (manager_id) REFERENCES employees(id)

);