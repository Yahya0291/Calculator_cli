#! /usr/bin/env node
import inquirer from "inquirer";
/*import chalk from "chalk";
import chalkAnimation, { karaoke } from 'chalk-animation';

async function welcometitle() {
    let animetitle = chalkAnimation.karaoke('Welcome to Animated CLI Calculator!!!');
}
setTimeout(() => {
    animetitle.stop();
}, 5000);*/
async function ask() {
    await inquirer
        .prompt([
        {
            type: "list",
            name: "Operator",
            message: "Which operation you want to perform",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"]
        },
        {
            type: "number",
            name: "num1",
            message: "Enter the first number!"
        },
        {
            type: "number",
            name: "num2",
            message: "Enter the second number!"
        }
    ])
        .then((answers) => {
        if (answers.Operator == "Addition") {
            console.log(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`);
        }
        else if (answers.Operator == "Subtraction") {
            console.log(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`);
        }
        else if (answers.Operator == "Multiplication") {
            console.log(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`);
        }
        else if (answers.Operator == "Division") {
            console.log(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`);
        }
    });
}
;
ask();
