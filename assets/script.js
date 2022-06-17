const inquirer = require("inquirer");

console.log(inquirer);

inquirer
  .prompt([
    {
      type: "",
      name: "",
      message: "",
    },
  ])
  .then((answers) => console.log(answers));

// const fs = require('fs');
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });
