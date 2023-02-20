const inquirer = require('inquirer');
const express = require('express');

//import and require mysql2
const mysql = require('mysql2');
const fs = require('fs');

// const PORT = process.env.PORT || 3001;s

// Express middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

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

// console.table([
//   {
//     name: 'foo',
//     age: 10
//   }, {
//     name: 'bar',
//     age: 20
//   }
// ]);

// prints
// name  age
// ----  ---
// foo   10
// bar   20
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
      ],
    },
  ])
  .then((data) => {
    // console.log(data);
    if (data.likeToDo === 'view all departments') {
      db.query(`SELECT * FROM department`, (err, result) => {
        if (err) {
          console.log(err);
        }
        console.table(result);
      });
    }

    if (data.likeToDo === 'view all roles') {
      db.query(`SELECT * FROM role;`, (err, result) => {
        if (err) {
          console.log(err);
        }
        console.table(result);
      });
    }

    if (data.likeToDo === 'view all employees') {
      db.query(`SELECT * FROM employees`, (err, result) => {
        if (err) {
          console.log(err);
        }
        console.table(result);
      });
    }
    // db.query(`SELECT * FROM department`, [{ test: 'test' }], function (err) {});
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
