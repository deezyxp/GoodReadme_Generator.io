const fs = require("fs");
const util = require("util");

const asyncWrite = util.promisify(fs.writeFile);

// array of questions for user
const questions = [{
    type: "input",
        name: "username",
        message: "What is your GitHub user name?",
    },
    {
        type: "input",
        name: "title",
        message: "What is your project title?",
    },
    {
        type: "input",
        name: "description",
        message: "Enter your project description?",
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter your project installation instructions",
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions for project use",
    },
    {
        type: "input",
        name: "contribute",
        message: "Enter the contributions associated with the project",
    },
    {
        type: "input",
        name: "tests",
        message: "Enter your test instructions",
    },
    {
        type: "input",
        name: "license",
        message: "Choose your license: ISC, MIT, Apache License 2.0, GNU GPLv2, GNU GPLv3",
    },
]

function writeToFile(fileName, data) {
    var fileName = 'README.md';
    fs.writeFile(fileName, data,  "utf-8", function(err) {
        if (err)  throw err;  
        console.log("Success");
    });
}



// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        
        //this line of code prints the data object to the terminal
        let readme = generateMarkdown(data);
        var fileName = 'README.md';
        return writeToFile(fileName, readme);

    }); 

}

// function call to initialize program
init();
