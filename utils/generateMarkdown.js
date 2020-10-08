// function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributors)
  * [Test](#test)
  * [Questions](#questions)
  * [License](#license)

  # Project Title: ${data.title}

  # Username: 
  ${data.username}
  # Description:
  ${data.description}
  # Installation: 
  ${data.installation}
  # Usage: 
  ${data.usage}
  # Contribute: 
  ${data.contribute}
  # Tests: 
  ${data.tests}
  # License: 
  ${data.license}

`;
}

module.exports = generateMarkdown;
