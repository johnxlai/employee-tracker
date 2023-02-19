const inquirer = require('inquirer');
// const express = require('express');
//import and require mysql2
const mysql = require('mysql2');
const fs = require('fs');

// call once somewhere in the beginning of the app
const cTable = require('console.table');
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
const displayAllDepartment = () => {
  console.table();
};

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
    console.log(data);
    if (data.likeToDo === 'view all departments') {
      console.log('test');
      console.table([
        {
          name: 'foo',
          age: 10,
        },
        {
          name: 'bar',
          age: 20,
        },
      ]);
    }
    // const svgPath = './dist/logo.svg';
    // const finalLogo = makeShape(data);
    //Generate the svg logo here.
    // fs.writeFile(svgPath, generateSvg(finalLogo), (err) =>
    //   err ? console.error(err) : console.log('Generated logo.svg')
    // );
  })
  .catch((err) => console.error(err));
