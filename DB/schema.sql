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

CREATE TABLE position (
    -- add an auto incrementing id as the primary key
    id INT AUTO_INCREMENT NOT NULL,
    -- add title to hold role position
    title VARCHAR(30) NOT NULL,
    -- add salary
    salary DECIMAL(10,2) NOT NULL,
    -- add department_id to reference the deparament the role belongs to (connect back to dept table)
    department_id INTEGER,
    -- state the primary key
	PRIMARY KEY (id),
    -- CONSTRAINT FK_department_position
    FOREIGN KEY (department_id) REFERENCES department (id)
);

CREATE TABLE employee (
    -- add an auto incrementing id as the primary key
    id INT AUTO_INCREMENT NOT NULL,
    -- add first_name of employee
    first_name VARCHAR(30) NOT NULL,
    -- add last_name of employee
    last_name VARCHAR(30) NOT NULL,
    -- add position_id to reference the position the employee has (connect to position table)
	position_id INT,
    -- manager id
    manager_id INT,
    -- state the primary key
    PRIMARY KEY (id),
	FOREIGN KEY (position_id) REFERENCES position (id),
    FOREIGN KEY (manager_id) REFERENCES employee (id)

);