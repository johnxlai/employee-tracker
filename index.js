const inquirer = require('inquirer');
//import and require mysql2
const mysql = require('mysql2');
const fs = require('fs');

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
    // const svgPath = './dist/logo.svg';
    // const finalLogo = makeShape(data);
    //Generate the svg logo here.
    // fs.writeFile(svgPath, generateSvg(finalLogo), (err) =>
    //   err ? console.error(err) : console.log('Generated logo.svg')
    // );
  })
  .catch((err) => console.error(err));
