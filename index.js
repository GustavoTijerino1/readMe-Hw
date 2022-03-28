// Includes packages needed
const inquirer = require('inquirer');
const fs = require('fs');
const badge = require('./selectBadge')
const pickedB = badge.license

inquirer
// User's answers will be displayed in ReadME
  .prompt([
    {
      type: 'input',
      message: 'What is your project name?',
      name: 'projectName',
    },
    {
      type: 'input',
      message: 'What are the steps required to install your project?',
      name: 'install',
    },
    {
      type: 'input',
      message: 'Describe how to use this program.',
      name: 'usage',
    },
    {
      type: 'list',
      message: 'Would you like to add a license?',
      choices: [
        'MIT License',
        'Mozilla Public License 2.0',
      ],
      name: 'license',
    },
    {
      type: 'input',
      message: "Enter your GitHub username."  ,  
      name: 'username'
    },
    {
      type: 'input',
      message: "Enter your email address.",
      name: 'email'
    }  
    
  
  ])
  // Creates ReadME with the answers of the user
  .then((response) => {
      
    fs.writeFile('README.md',

 `
 ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

# ${response.projectName}

## Description
This project lets you generate a professional README.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

 ${response.install}

## Usage

 ${response.usage}

![How it works.](assets/images/Screenshot.png)

[index.js - bootcamp - Visual Studio Code 2022-03-28 00-00-57.zip](https://github.com/GustavoTijerino1/readMe-Hw/files/8359780/index.js.-.bootcamp.-.Visual.Studio.Code.2022-03-28.00-00-57.zip)


## License

 ${response.license}

## Contact me
How to reach me if you have any additional questions.

[GitHub](https://github.com/${response.username})

Email: ${response.email}
---
    
    
    `, (err) =>
    err ? console.error(err) : console.log('README file created')
    );
    });