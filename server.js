const inquirer = require('inquirer');

//import and require mysql2
const mysql = require('mysql2');
const fs = require('fs');

// call once somewhere in the beginning of the app
const cTable = require('console.table');

const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: 'killbear',
    database: 'employee_tracker_db',
  },
  console.log(`Connected to the movies_db database.`)
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

inquirer
  .prompt([
    // {
    //   type: 'input',
    //   name: 'logoName',
    //   message: 'Please enter text, must not be more than 3 letters',
    // },

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
  ])
  .then((data) => {
    // console.log(data);
    if (data.likeToDo === 'view all departments') {
      // id names
      const department = `SELECT department.id AS id, name AS department
      FROM department;`;
      db.query(department, (err, result) => {
        if (err) {
          console.log(err);
        }
        console.table(result);
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
      });
    }

    if (data.likeToDo === 'view all employees') {
      const queryStatement = `SELECT employee.id AS id, first_name,  last_name, role.title AS title, department.name AS department, salary, employee.manager_id as Manager
      FROM (( employee
      INNER JOIN role ON employee.role_id = role.id)
      INNER JOIN department ON role.department_id = department.id);`;
      // id first name last_name title deparment salary manager name
      db.query(queryStatement, (err, result) => {
        if (err) {
          console.log(err);
        }
        console.table(result);
      });
    }
    if (data.likeToDo === 'add a department') {
    }
    if (data.likeToDo === 'add a role') {
    }
    if (data.likeToDo === 'add an employee') {
    }
    if (data.likeToDo === 'update an employee role') {
    }
    if (data.likeToDo === 'quit') {
    }

    // Add department
    // Add role
    // add employee
    // // db.query(`SELECT * FROM department`, [{ test: 'test' }], function (err) {});
    // if (data.likeToDo === 'view all departments') {
    //   // Query database
    //   // let deletedRow = 2;
    // }
    // const svgPath = './dist/logo.svg';s
    // const finalLogo = makeShape(data);
    //Generate the svg logo here.
    // fs.writeFile(svgPath, generateSvg(finalLogo), (err) =>
    //   err ? console.error(err) : console.log('Generated logo.svg')
    // );
  })
  .catch((err) => console.error(err));
