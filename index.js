const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Enginneer")
const inquirer = require("inquirer")
const fs = require("fs")
const {writeFile} = fs.promises
const teamMembers = []

function internPrompt(){
    inquirer.prompt([{
        type: "input",
        name: "name",
        message: "What is there name?"
    },{
        type: "input",
        name: "id",
        message: "What is there id?"
    },{
        type: "input",
        name: "email",
        message: "What is there email?"
    },{
        type: "input",
        name: "school",
        message: "What school did they attend?"
    }]).then(function(data){
        const emp = new Intern(data.name, data.id, data.email, data.school);
        teamMembers.push(emp);
        menu()
    });
};
function engineerPrompt(){
    inquirer.prompt([{
        type: "input",
        name: "name",
        message: "What is there name?"
    },{
        type: "input",
        name: "id",
        message: "What is there id?"
    },{
        type: "input",
        name: "email",
        message: "What is there email?"
    },{
        type: "input",
        name: "github",
        message: "What is there Github?"
    }]).then(function(data){
        const emp = new Engineer(data.name, data.id, data.email, data.github);
        teamMembers.push(emp);
        menu()
    });
};
function managerPrompt(){
    inquirer.prompt([{
        type: "input",
        name: "name",
        message: "What is there name?"
    },{
        type: "input",
        name: "id",
        message: "What is there id?"
    },{
        type: "input",
        name: "email",
        message: "What is there email?"
    },{
        type: "input",
        name: "officeNumber",
        message: "What is there office number?"
    }]).then(function(data){
        const emp = new Manager(data.name, data.id, data.email, data.officeNumber);
        teamMembers.push(emp);
        menu()
    });
};
function menu(){
    inquirer.prompt([{
        type: "list",
        name: "menu",
        message: "Which team member would you like to create?",
        choices: ["Manager", "Intern", "Engineer", "Done"] 
    }]).then(function(data){
       switch (data.menu){
        case "Manager":
            managerPrompt()
            break
        case "Intern":
            internPrompt()
            break
        case "Engineer":
            engineerPrompt()
            break
        default:
            console.log(teamMembers)
       }
    });
};
menu()