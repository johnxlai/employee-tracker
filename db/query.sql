

-- SELECT department.id AS id, department_name AS department
--       FROM department;

-- SELECT  title AS department,
-- FROM role;


SELECT employee.id AS id, first_name,  last_name, role.title AS title, department.name AS department, salary, employee.manager_id as Manager
FROM (( employee
INNER JOIN role ON employee.role_id = role.id)
INNER JOIN department ON role.department_id = department.id);


