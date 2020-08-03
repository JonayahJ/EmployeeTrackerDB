-- Drops the emptrack_db if it exists currently --
DROP DATABASE IF EXISTS emptrack_db;
-- Creates the "emptrack_db" database --
CREATE DATABASE emptrack_db;

-- Makes it so all of the following code will affect emptrack_db --
USE emptrack_db;

-- Creates the table "people" within emptrack_db --
CREATE TABLE department (
    -- add an auto incrementing id as the primary key
    -- add name of department
    -- state the primary key
);

CREATE TABLE position (
    -- add an auto incrementing id as the primary key
    -- add title to hold role position
    -- add salary
    -- add department_id to reference the deparament the role belongs to (connect back to dept table)
    -- state the primary key
);

CREATE TABLE employee (
    -- add an auto incrementing id as the primary key
    -- add first_name of employee
    -- add last_name of employee
    -- add position_id to reference the position the employee has (connect to position table)
    -- manager id
        -- if no manager, leave as null
        -- if manager, add manager_id to reference to another employee who manages THIS employee
    -- state the primary key
);

-- Creates new rows containing data in all named columns --
    -- INSERT INTO people VALUES ("Ahmed", TRUE, "Rockington", 100);

    -- INSERT INTO people VALUES ("Ahmed", TRUE, "Rockington", 100);

    -- INSERT INTO people VALUES ("Jacob", TRUE, "Misty", 10);

    -- INSERT INTO people VALUES ("Peter", false);


-- Updates the row where the column name is peter --
    -- UPDATE people
    -- SET has_pet = true, pet_name = "Franklin", pet_age = 2
    -- WHERE name = "Peter";
