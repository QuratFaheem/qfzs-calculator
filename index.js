#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from 'chalk';
console.log(chalk.blue("WELCOME TO MY CALCULATOR APP USING TYPESCRIPT"));
//Accepting number one
const answers = await inquirer.prompt([{
        name: "numberOne",
        type: "number",
        message: "Enter your first number"
    },
    {
        name: "numberTwo",
        type: "number",
        message: "Enter your Second number"
    },
    {
        name: "operator",
        type: "list",
        message: "Choose your Operator",
        choices: ['+', '-', '*', '/', '%']
    }]);
const { numberOne, numberTwo, operator } = answers;
if (numberOne && numberTwo && operator) {
    if (operator === '+') {
        console.log(numberOne + numberTwo);
    }
    else if (operator === '-') {
        console.log(numberOne - numberTwo);
    }
    else if (operator === '*') {
        console.log(numberOne * numberTwo);
    }
    else if (operator === '/') {
        console.log(numberOne / numberTwo);
    }
    else if (operator === '%') {
        console.log((numberOne / numberTwo) * 100, '%');
    }
}
else {
    console.log("kindly input the correct values");
}
