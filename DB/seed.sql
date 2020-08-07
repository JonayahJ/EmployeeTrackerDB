-- Makes it so all of the following code will affect employeeDB --
USE employeeDB;

-- Adding in departments seed data
INSERT INTO department (name) 
VALUES ("Command"), ("Operations"), ("Science"), ("Personnel");

-- view all departments
SELECT * FROM department;

-- Adding in positions seed data
INSERT INTO positions (title, salary, dept_id)
VALUES 
("Captain", 250000, 1), 
("First Officer", 200000, 1), 
("Chief Engineer", 180000, 2),
("Chief Security Officer", 180000, 2),
("Chief Medical Officer", 180000, 3),
("Chief Operations Officer", 180000, 2),
("Ship's Counselor", 150000, 4),
("Engineering Officer", 120000, 2),
("Conn Officer", 120000, 1),
("Ten-Forward Host", 120000, 4);

-- view all positions
-- SELECT * FROM positions;

-- add new employee seed data
INSERT INTO employees (designation, first_name, last_name, positions_id, manager_id)
VALUES
("Captain", "Jean-Luc", "Picard", 1, null),
("Commander", "William", "Riker", 2, 1),
("Lt. Commander", "Geordi", "La Forge", 3, null),
("Lt.", "Worf", null, 4, 1),
("Dr.", "Beverly", "Crusher", 5, 1),
("Lt. Commander", "Data", null, 6, 1),
(null, "Deanna", "Troi", 7, 1),
("Ensign", "Wesley", "Crusher", 8, 3),
("Ensign", "Ro", "Laren", 9, 2),
(null, "Guinan", null, 10, null);

-- view all employees
SELECT * FROM employees;

-- view all employees by department
SELECT
    employees.designation, 
    employees.first_name,
    employees.last_name,
    department.name AS department
FROM
    employees
JOIN positions ON positions.id = employees.positions_id
JOIN department ON department.id = positions.dept_id
WHERE dept_id = 1;
