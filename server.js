const inquirer = require('inquirer');

//import and require mysql2
const mysql = require('mysql2');
const fs = require('fs');
require('dotenv').config();

// call once somewhere in the beginning of the app
const cTable = require('console.table');

const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: process.env.DB_USER,
    // TODO: Add MySQL password here
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  console.log(`Connected to the employee tracker db.`)
);

// const displayAllDepartment = () => {
//   const sql = `SELECT * FROM department`;
//   const params = [body.movie_name];
//   db.query(sql, (err, result) => {
//     if (err) {
//       res.status(400).json({ error: err.message });
//       return res;
//     }
//     res.json({
//       message: 'success',
//       data: body,
//     });
//   });
// };

const questions = [
  {
    type: 'list',
    name: 'likeToDo',
    message: `What would you like to do`,
    choices: [
      'view all departments',
      'view all roles',
      'view all employees',
      'add a department',
      'add a role',
      'add an employee',
      'update an employee role',
      'quit',
    ],
  },
];

function askQuestion() {
  inquirer
    .prompt(questions)
    .then((data) => {
      // console.log(data);
      if (data.likeToDo === 'view all departments') {
        // id names
        const queryStatement = `SELECT department.id AS id, name AS department
      FROM department;`;
        db.query(queryStatement, (err, result) => {
          if (err) {
            console.log(err);
          }
          console.table(result);
          askQuestion();
        });
      }

      if (data.likeToDo === 'view all roles') {
        // id title department salary
        const queryStatement = `SELECT role.id AS id, role.title AS title, role.department_id AS department, role.salary AS salary
      FROM role;`;
        db.query(queryStatement, (err, result) => {
          if (err) {
            console.log(err);
          }
          console.table(result);
          askQuestion();
        });
      }

      if (data.likeToDo === 'view all employees') {
        const queryStatement = `SELECT employee.id, employee.first_name, employee.last_name, role.title AS title, department.name AS department, salary, CONCAT(manager.first_name , " ", manager.last_name) as Manager
      FROM employee
    INNER JOIN role ON employee.role_id = role.id
    INNER JOIN department ON role.department_id = department.id
    LEFT JOIN employee manager ON employee.manager_id = manager.id
    ORDER BY id;`;
        // id first name last_name title deparment salary manager name
        db.query(queryStatement, (err, result) => {
          if (err) {
            console.log(err);
          }
          console.table(result);
          askQuestion();
        });
      }
      if (data.likeToDo === 'add a department') {
        // prompt user to enter what is the name of the department
        //ADDED what to the database
      }
      if (data.likeToDo === 'add a role') {
        // prompt user to enter new role
        //salary of the role
        //which department does the role belong to?
        //return ADDED role name in the database
      }
      if (data.likeToDo === 'add an employee') {
        //add first name
        //add last name
        //What is the employees role
        //what is the employee's manager (none is an option)
        //       SELECT * FROM employee
        // WHERE employee.manager_id IS NULL;
      }
      if (data.likeToDo === 'update an employee role') {
        //Q  which employee do you want to update?
        //select any employee (list of all the employee)
        //Q What role dp ypi waamt tp assign the selected employee?
        //list of all the role
        //Updated employee role
      }
      if (data.likeToDo === 'quit') {
        process.exit();
      }
    })
    .catch((err) => console.error(err));
}
askQuestion();
