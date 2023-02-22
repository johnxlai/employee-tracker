

-- SELECT department.id AS id, department_name AS department
--       FROM department;

-- SELECT  title AS department,
-- FROM role;


-- SELECT employee.id, employee.first_name, employee.last_name, role.title AS title, department.name AS department, salary, CONCAT(manager.first_name , " ", manager.last_name) as Manager
-- FROM employee
-- INNER JOIN role ON employee.role_id = role.id
-- INNER JOIN department ON role.department_id = department.id
-- LEFT JOIN employee manager ON employee.manager_id = manager.id;

-- SELECT employee.manager_id AS Manager FROM employee GROUP BY first_name;

-- SELECT * FROM employee
-- WHERE employee.manager_id IS NULL;
-- SELECT * FROM department

-- INSERT INTO department(name)
-- Values ('MET HO')
-- SELECT * FROM department;

-- INSERT INTO role(title,salary,)

-- SELECT CONCAT(first_name, " ", last_name) AS name
-- FROM employee;

SELECT title FROM role;