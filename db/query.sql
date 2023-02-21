

-- SELECT department.id AS id, department_name AS department
--       FROM department;

-- SELECT  title AS department,
-- FROM role;


SELECT abc.id, abc.first_name, abc.last_name, efg.title AS title, department.name AS department, salary



FROM employee abc
INNER JOIN role efg ON abc.role_id = efg.id
INNER JOIN department ON efg.department_id = department.id
ORDER BY id
-- LEFT JOIN employee manager ON employee.manager_id = manager.id;

-- SELECT employee.manager_id AS Manager FROM employee GROUP BY first_name;

-- SELECT * FROM employee
-- WHERE employee.manager_id IS NULL;