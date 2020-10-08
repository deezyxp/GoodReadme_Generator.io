var inquirer = require("inquirer");
var generateMarkdown = require("./utils/generateMarkdown");
var axios = require("axios");
var fs = require("fs");
// Require all npm packages and files

const questions = [
    // questions to user using "inquirer"
    {
      type: "input",
      message: "Please enter your Github Username",
      name: "username"
    },
  
    {
      type: "input",
      message: "Please enter your project title",
      name: "title",
    },  
    {
      type: "input",
      message: "Please enter your project description",
      name: "description",
    },
  
    {
      type: "input",
      message: "Please enter your project installation instructions",
      name: "installation",
    },
  
    {
      type: "input",
      message: "Please enter the usage of your project",
      name: "usage",
    },
  
    {
      type: "input",
      message: "Please enter the contribution guidelines for your project",
      name: "contributors",
    },
  
    {
      type: "input",
      message: "Please enter your test instructions",
      name: "test",
    },
    {
        type: "list",
        message: "Please choose a license",
        choices: [
            "Apache License 2.0",
            "GNU General Public License v3.0",
            "MIT License",
            "BSD 2-Clause 'Simplified' License",
            'BSD 3-Clause "New" or "Revised" License',
            "Boost Software License 1.0",
            "Creative Commons Zero v1.0 Universal",
            "Eclipse Public License 2.0",
            "GNU Affero General Public License v3.0",
            "GNU General Public License v2.0",
            "GNU Lesser General Public License v2.1",
            "Mozilla Public License 2.0",
            "The Unlicense"
        ],
        name: "license"
    },
  ];
  
  function init() {
    inquirer.prompt(questions).then(answers => {
      console.log(answers);
      axios
        .get("https://api.github.com/users/" + answers.username)
        .then(response => {
          console.log(response);
          var imageURL = response.data.avatar_url;
          answers.image = imageURL;
          console.log(imageURL);
          fs.writeFile("README.md", generateMarkdown(answers), function(err) {
            if (err) {
              throw err;
            }
          });
        });
    });
  }
  
  init();