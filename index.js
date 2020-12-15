generateMarkdown = require('./utils/generateMarkdown.js');

// NODE MODULES
const inquirer = require('inquirer');
const fs = require('fs');


// inquirer to generate the quations for the user
inquirer.prompt(
    [
        {
            type: 'input',
            message: "What's the project title?",
            name: 'title',
            // validate the project title and if not return a missing title prompt
            validate: (value)=>{ if(value){return true} else {return 'i need a title to continue'}},
        },
        {
            type: 'input',
            message: 'How do you install your app?',
            name: 'installation',
            validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
        },
        {
            type: 'input',
            message: 'Instructions to be followed?',
            name: "instructions",
            validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
        },
        {
            type: 'input',
            message: 'Any credits or other partners?',
            name: 'credit',
            validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
        },
        {
            type: 'input',
            message: 'How do you use your app?',
            name: 'usage',
            validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
        },
        {
            // License list to choose from
            type: 'list',
            message: 'What license did you use?',
            name: 'license',
            choices: ['The MIT License', 'The GPL License', 'Apache License', 'N/A'],
            validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
        },
        {
            type: 'input',
            message: 'GitHub username: ',
            name: 'github',
            validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
        },
        {
            type: 'input',
            message: 'E-mail:',
            name: 'email',
            validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
        },
        
    ]
).then(({
    title,
    installation,
    instructions,
    credit,
    license,
    github,
    email,
    usage,
    contribution
})=>{
// template to be used
const template = `# ${title}

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
# Installation
${installation}
## Usage
${usage}
### instructions
${instructions}
## Credits
${credit}
## License
${license}

# Contact
* GitHub :${github}
* E-mail :${email}`;
// Function to write README file using fs
createNewFile(title,template);
}
);
// generate a createNewFile
function createNewFile(fileName,data){
//fs
fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`,data,(err)=>{
    if(err){
        console.log(err)
    }
    console.log('Your README has been generated!');
})
}

// INSTALLATION









// function to write README file
// function writeToFile(fileName, data) {
//  }

// function to initialize program
// function init() {

// }
// function call to initialize program
// init();
