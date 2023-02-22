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
        const question = [
          {
            type: 'input',
            name: 'addDepartment',
            message: `What is the name of the department`,
          },
        ];
        // prompt user to enter what is the name of the department
        inquirer.prompt(question).then((data) => {
          console.log(({ addDepartment } = data));

          const queryStatement = `INSERT INTO department(name)
          Values (${addDepartment})
          `;
          db.query(queryStatement, (err, result) => {
            if (err) {
              console.log(err);
            }
            console.info(`Added ${addDepartment} to the database`);
            askQuestion();
          });
        });
        //ADDED what to the database
      }
      if (data.likeToDo === 'add a role') {
        // prompt user to enter new role

        const question = [
          {
            type: 'input',
            name: 'addRole',
            message: `What is the name of the Role`,
          },
          //salary of the role
          {
            type: 'input',
            name: 'addSalary',
            message: `Please add the salary of the role`,
          },
          //which department does the role belong to?
          {
            type: 'input',
            name: 'whichDepartment',
            message: `which department does the role belong to?`,
          },
        ];
        inquirer.prompt(question).then((data) => {
          //return ADDED role name in the database
          askQuestion();
        });
      }
      if (data.likeToDo === 'add an employee') {
        const question = [
          {
            type: 'input',
            name: 'addFirstName',
            message: `What is the first name?`,
          },
          //salary of the role
          {
            type: 'input',
            name: 'addLastName',
            message: `What is the first name?`,
          },
          //What is the employees role
          {
            type: 'input',
            name: 'employeesRole',
            message: `What is the employee's role?`,
          },
          //who is the employee's manager (none is an option)
          {
            type: 'input',
            name: 'employeesManager',
            message: `Who is the employee's manager?`,
          },
        ];
        inquirer.prompt(question).then((data) => {
          askQuestion();
          //return employ added
          //       SELECT * FROM employee
          // WHERE employee.manager_id IS NULL;
        });
      }
      if (data.likeToDo === 'update an employee role') {
        const question = [
          {
            type: 'list',
            name: 'whichEmployee',
            message: `Which employee's role do you want to update`,
            choices: [
              'view all departments',
              //this needs to be a list of all employees full name
            ],
          },
          //Q Which role do you want to assign him/her to?
          {
            type: 'list',
            name: 'updateRole',
            message: `Which employee's role do you want to update`,
            choices: [
              //this needs to be a list of all available roles
              //list of all the role
            ],
          },
        ];
        inquirer.prompt(question).then((data) => {
          askQuestion();
          //Return Updated employee role
          //       SELECT * FROM employee
          // WHERE employee.manager_id IS NULL;
        });

        //If user click exits
        if (data.likeToDo === 'quit') {
          process.exit();
        }
      }
    })
    .catch((err) => console.error(err));
}
askQuestion();
