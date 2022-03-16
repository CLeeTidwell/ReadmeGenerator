// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userInput, userInfo) {
	return (
`# ${userInput.title}
## Description
${userInput.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Developer](#developer)
## Installation
${userInput.installation}
## Usage
${userInput.usage}
## License
![userLicense](https://img.shields.io/badge/license-${(userInput.license).replace(/ /g, "_")}-blue)
## Contributing
${userInput.contributing}
## Tests
${userInput.tests}
## Developer
![userImage](${userInfo.avatar_url})
GitHub Username: [@${userInfo.login}](https://github.com/${userInfo.login})
GitHub Email Address: [${userInfo.email}](mailto:${userInfo.email})`
	);
}

module.exports = generateMarkdown;
