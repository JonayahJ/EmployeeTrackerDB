-- Makes it so all of the following code will affect employeeDB --
USE employeeDB;

-- Adding in departments
INSERT INTO department (name) 
VALUES ("Command"), ("Operations"), ("Science");

SELECT * FROM department;

-- Adding in positions 
INSERT INTO positions (title, salary, dept_id)
VALUES 
("Captain", 250000, 1), 
("First Officer", 200000, 1), 
("Chief Engineer", 180000, 2),
("Chief Security Office", 180000, 2),
("Chief Medical Office", 180000, 3),
("Chief Operations Officer", 180000, 2),
("Engineering Officer", 120000, 2),
("Ship's Counselor", 150000, null),
("Conn Officer", 120000, 1),
("Ten-Forward Host", 120000, null);

SELECT * FROM positions;

INSERT INTO employees (first_name, last_name, positions_id, manager_id)
VALUES
("Jean-Luc", "Picard", 1, null),
("William", "Riker", 2, 1),
("Geordi", "La Forge", 3, null),
("Worf", null, 4, 1),
("Beverly", "Crusher", 5, 1),
("Data", null, 6, 1),
("Wesley", "Crusher", 7, 3),
("Deanna", "Troi", 8, 1),
("Ro", "Laren", 9, 2),
("Guinan", null, 10, null);

SELECT * FROM employees;