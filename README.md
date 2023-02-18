# Employee Tracker
![License Badge](https://img.shields.io/badge/license-MIT-brightgreen)


# SQL challenge
Developers frequently have to create interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces are called content management systems (CMS). Your assignment this module is to build a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.

Because this application won’t be deployed, you’ll also need to create a walkthrough video that demonstrates its functionality and all of the following acceptance criteria being met. You’ll need to submit a link to the video and add it to the README of your project.

Refer to the Video Submission GuideLinks to an external site. on the Full-Stack Blog for additional guidance on creating a video.
## User Story
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
## Description
* This is a command-line application, which will generated a logo svg file. This app will prompt the user for text (up to 3 characters long), a text colour and a background colour for the logo. All colour must be a css named value or in hex code. The user can choose from circle, triangle or square as the shape of the logo.


# Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [How to Contribute](#how-to-contribute)
- [Questions](#questions)
- [License](#license)

## Installation
* In the root directory you want to run "npm i" to install all the required packages.

## Usage
* User can type "npm start" or "node index.js" to start the user prompt in the root directory.
* The user must pass all the requirements of making the svg logo, otherwise it will prompt a corresponding error message.
* Upon finishing all the questions, a svg file will be generated called logo.svg in the dist folder.

* This project uses the npm inquirer, is-css3-color and jest for testing.


## License
* This project is under the MIT license.
* If you want to get more details about the license, please visit [Choose License](https://choosealicense.com "Choose License")

## How to Contribute
* Feel free to contact via email or github or fork my repo and request for pull request!

## Tests
* Its been tested for correct user input, logo text must not exceed 3 characters and must contain atleast 1 character.
* It must be a vaild CSS named value or hex code to set the text colour of the logo and the background colour of the logo.
* These tests must be passed in order for the logo.svg file to be generated.

## Questions
* Please contact me via my [Github Username](https://github.com/johnxlai)

* You can reach me with additional questions <a href="mailto:lai.john.py@gmail.com">lai.john.py@gmail.com</a>


## Repo
https://github.com/johnxlai/svg-logo-maker
## WalkThrough Video
https://drive.google.com/file/d/1zKDm3_RNRF0xhl7HIcSfiNnQ_BCQhymY/view



## Bonus
Try to add some additional functionality to your application, such as the ability to do the following:

Update employee managers.

View employees by manager.

View employees by department.

Delete departments, roles, and employees.

View the total utilized budget of a department—in other words, the combined salaries of all employees in that department.