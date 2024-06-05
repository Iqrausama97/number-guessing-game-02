#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.italic.bold.cyan("\nWelcome to Number Guessing Game"));
const secretNumber = Math.floor(Math.random() * 10 + 1);
let myLoop = true;
let attempts = 1;
while (myLoop) {
    const userInput = await inquirer.prompt({
        name: 'userNumber',
        type: 'number',
        message: 'Enter your Number:'
    });
    let { userNumber } = userInput;
    console.log(`\nYour attemp No. ${attempts}`);
    if (userNumber === secretNumber)
        wonMatch();
    if (userNumber > secretNumber)
        greaterNum();
    if (userNumber < secretNumber)
        lessNum();
    function wonMatch() {
        console.log(chalk.italic.bold.gray('Congrats! You guessed the right Number.'));
        console.log(`Your Total attempts are ${attempts}`);
        myLoop = false;
    }
    function greaterNum() {
        console.log(chalk.italic.bold.gray('Your guessed number is greater than the actual number.'));
        attempts++;
    }
    function lessNum() {
        console.log(chalk.italic.bold.gray('Your guessed number is less than the actual number.'));
        attempts++;
    }
}
