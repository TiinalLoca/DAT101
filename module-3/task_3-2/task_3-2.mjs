"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let countingUp = "";
for (let number = 1; number <= 10; number++) {
    countingUp += number + (number < 10 ? ", " : "");
}

printOut (countingUp + newLine);

let countingDown = "";
for (let number = 10; number >= 1; number--) {
    countingDown += number + (number > 1 ? ", " : "");
}

printOut (countingDown);

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const secretNumber = 45;
let guessedNumber = 0;

while (guessedNumber !== secretNumber) {
    guessedNumber = Math.floor(Math.random() * 60) + 1;
}

printOut ("Tallet er " + guessedNumber);

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const targetNumber = 45678;
let currentGuess = 0;
let numberOfGuesses = 0;

const startTime = Date.now();

while (currentGuess !== targetNumber) {
    currentGuess = Math.floor(Math.random() * 1000000) + 1;
    numberOfGuesses++;
}

const timeUsed = Date.now() - startTime;

printOut ("Tallet er " + currentGuess + newLine);
printOut ("Antall gjetninger: " + numberOfGuesses + newLine);
printOut ("Tid brukt: " + timeUsed + " millisekunder");

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let primeNumbers = "";

for (let number = 2; number < 200; number++) {
    let divisor = 2;
    let isPrime = true;

    while (divisor < number){
        if (number % divisor === 0) {
            isPrime = false;
            break;
        }
        divisor++;
    }

    if (isPrime) {
        primeNumbers += number + " ";
    }
}

printOut (primeNumbers);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

for (let row = 1; row <= 7; row++) {
    let rowText = "";

    for (let column = 1; column <= 9; column++) {
        rowText += "K" + column + "R" + row + " "; 
    }

    printOut (rowText + newLine);
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

for (let student = 1; student <= 5; student++) {
    const points = Math.floor(Math.random() * 236) + 1;
    const percentage = (points / 236) * 100;
    let grade;

    if (percentage >= 89){
        grade = "A";
    }   else if (percentage >= 77){
        grade = "B";
    }   else if (percentage >= 65){
        grade = "C";
    }   else if (percentage >= 53){
        grade = "D";
    }   else if (percentage >= 41){
        grade = "E";
    }   else {
        grade = "F";
    }

   printOut ("student " + student + ": " + points + " poeng (" + Math.round(percentage) + "%), karakter " + grade + newLine);
  
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function rollUntil (match) {
    let throws = 0;
    let dice;
    let counts;

    do {
        throws++;
        dice = [];
        counts = [0, 0, 0, 0, 0, 0];

        for (let die = 1; die <= 6; die++) {
            const value = Math.floor(Math.random() * 6) + 1;
            dice.push(value);
            counts[value - 1]++;
        }
    }   while (!match(counts));

    return { throws, dice };
}

const threePairs = rollUntil(counts => counts.filter(count => count === 2).length === 3 );

const straight = rollUntil(counts => counts.every (count => count === 1) );

const tower = rollUntil(counts => counts.includes(4) && counts.includes(2) );

const yatzy = rollUntil(counts => counts.includes (6) );

printOut (threePairs.dice.join(",") + newLine);
printOut ("3 par" + newLine);
printOut ("På " + threePairs.throws + " kast!" + newLine + newLine);

printOut (straight.dice.join(",") + newLine);
printOut ("Full straight" + newLine);
printOut ("På " + straight.throws + " kast!" + newLine + newLine);

printOut (tower.dice.join(",") + newLine);
printOut ("Tårn!" + newLine);
printOut ("På " + tower.throws + " kast!" + newLine + newLine);

printOut (yatzy.dice.join(",") + newLine);
printOut ("Yatzy!" + newLine);
printOut ("På " + yatzy.throws + " kast!");

printOut(newLine);
