const inquirer = require('inquirer');
const fs = require('fs');

inquirer
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
      message: 'Describe how to use this program',
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
  .then((response) => {
      response.usage
    fs.writeFile('README.md',
    `
# ${response.projectName}

## Description

This project lets you generate a professional README.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

What are the steps required to install your project?

${response.install}
## Usage

${response.usage}
Provide instructions and examples for use. Include screenshots as needed.


## License
${response.license}

## Contact me
[GitHub](https://github.com/${response.username})

Email:  ${response.email}


---

    
    
    `, (err) =>
    err ? console.error(err) : console.log('README file created')
    );
    });