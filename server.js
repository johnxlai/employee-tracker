const inquirer = require('inquirer');

//import and require mysql2
const mysql = require('mysql2');
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

function askQuestion(isStartUp) {
  const questions = [
    {
      type: 'input',
      name: 'startUp',
      message: 'Press any key to continue',
      when: !isStartUp,
    },
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

  inquirer
    .prompt(questions)
    .then((data) => {
      switch (data.likeToDo) {
        case 'view all departments':
          viewAll(`SELECT department.id AS id, name AS department
          FROM department;`);
          break;
        case 'view all roles':
          viewAll(`SELECT role.id AS id, role.title AS title, role.department_id AS department, role.salary AS salary
      FROM role;`);
          break;

        case 'view all employees':
          viewAll(`SELECT employee.id, employee.first_name, employee.last_name, role.title AS title, department.name AS department, salary, CONCAT(manager.first_name , " ", manager.last_name) as Manager
          FROM employee
      INNER JOIN role ON employee.role_id = role.id
    INNER JOIN department ON role.department_id = department.id
    LEFT JOIN employee manager ON employee.manager_id = manager.id
    ORDER BY id;`);
          break;

        case 'add a department':
          addDepartment();
          break;

        case 'add a role':
          addRole();
          break;

        case 'add an employee':
          addEmployee();
          break;

        case 'update an employee role':
          updateEmployeeRole();
          break;

        default:
          process.exit();
          break;
      }
    })
    .catch((err) => console.error(err));
}

function viewAll(queryStatement) {
  db.query(queryStatement, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.table(result);
    askQuestion();
  });
}
function addDepartment() {
  const question = [
    {
      type: 'input',
      name: 'addDepartment',
      message: `What is the name of the department`,
    },
  ];
  // prompt user to enter what is the name of the department
  inquirer.prompt(question).then(({ addDepartment } = data) => {
    const queryStatement = `INSERT INTO department(name)
          Values ('${addDepartment}');
          `;
    db.query(queryStatement, (err, result) => {
      if (err) {
        console.log(err);
      }
      console.info(`Added ${addDepartment} to the database`);
      askQuestion();
    });
  });
}
function addRole() {
  db.query(`SELECT * FROM department`, (err, result) => {
    if (err) {
      console.log(err);
    }
    const departmentNameArr = result.map(({ id, name }) => {
      return { name, value: id };
    });

    const question = [
      {
        type: 'input',
        name: 'title',
        message: `What is the name of the Role`,
      },
      //salary of the role
      {
        type: 'input',
        name: 'salary',
        message: `Please add the salary of the role`,
      },
      //which department does the role belong to?
      {
        type: 'list',
        name: 'department_id',
        message: `which department does the role belong to?`,
        choices: departmentNameArr,
      },
    ];
    inquirer.prompt(question).then((data) => {
      console.log(data);
      const queryStatement = `INSERT INTO role SET ?`;
      db.query(queryStatement, data, (err, result) => {
        if (err) {
          console.log(err);
        }
        console.info(`Added ${data.title} the database`);
        askQuestion();
      });
    });
  });
}
async function addEmployee() {
  let roleArr, managerList;

  await db.query(`SELECT title FROM role`, (err, result) => {
    // if (err) {
    //   console.log(err);
    // }

    const roleArr = result.map(({ title } = result) => {
      return title;
      // return { name, value: id };
    });
  });

  const queryStatement = `SELECT first_name, last_name FROM employee
      WHERE employee.manager_id IS NULL;`;

  db.query(queryStatement, (err, result) => {
    console.log(({ first_name, last_name } = result));
    managerList = result.map(({ managerName } = result) => {
      return managerName;
    });
  });

  // console.log(managerList);

  const question = [
    {
      type: 'input',
      name: 'first_name',
      message: `What is the first name?`,
    },
    {
      type: 'input',
      name: 'last_name',
      message: `What is the last name?`,
    },
    //What is the employees role
    {
      type: 'list',
      name: 'role_id',
      message: `What is the employee's role?`,
      choices: roleArr,
    },
    // who is the employee's manager (none is an option)
    {
      type: 'list',
      name: 'employeesManager',
      message: `Who is the employee's manager?`,
      choices: managerList,
    },
  ];
  inquirer.prompt(question).then(({ first_name, last_name } = data) => {
    console.info(`Added ${first_name} ${last_name} to the database`);

    askQuestion();
    //return employ added
    //       SELECT * FROM employee
    // WHERE employee.manager_id IS NULL;
  });
}
function updateEmployeeRole() {
  const queryStatement = `SELECT first_name, last_name FROM employee`;

  db.query(queryStatement, (err, result) => {
    // console.log(result);
    employeeList = result.map(({ first_name, last_name } = employee) => {
      return `${first_name} ${last_name}`;
    });

    const question = [
      {
        type: 'list',
        name: 'whichEmployee',
        message: `Which employee's role do you want to update`,
        choices: employeeList,
      },
    ];
    inquirer.prompt(question).then((data) => {
      askQuestion();
      //Return Updated employee role
      //       SELECT * FROM employee
      // WHERE employee.manager_id IS NULL;
    });
  });

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
}

askQuestion(true);
