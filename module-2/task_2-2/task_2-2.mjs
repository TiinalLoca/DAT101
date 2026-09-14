"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const Original = 2 + 3 * 2 - 4 * 6;
const withParentes= 2 + (3*(2 - 4)) * 6;

printOut ("Original: " + Original);
printOut ("With parenteser: " + withParentes);




printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const millimeters = (25 * 1000) + (34 * 10);
const millPerInch = 25.4;
const inches = millimeters / millPerInch;

printOut ("25 meters and 34 cm = " + inches.toFixed(2) + "inches");


printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const days = 3;
const hours = 12;
const minutes = 14;
const seconds = 45;

const totalMinutes = (days * 24 * 60) + (hours * 60) + minutes + (seconds / 60);

printOut ("3 days, 12 hours, 14 minutes, and 45 seconds = " + totalMinutes + "minutes");


printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const totalTime = 6322.52;
const wholeDays = Math.floor(totalTime / (24 * 60));
let remainder = totalTime / (24 * 60) - wholeDays;

const wholeHours = Math.floor (remainder * 24);
remainder = remainder * 24 - wholeHours;

const wholeMinutes = Math.floor (remainder * 60);
remainder = remainder * 60 - wholeMinutes;

const wholdeSeconds = Math.floor (remainder * 60);

printOut (wholeDays + "days, " + wholeHours + "hours," + wholeMinutes + "minutes," + wholdeSeconds + "seconds");


printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const usd = 54;
const nokRate = 76 / 8.6;
const nok = Math.round (usd * nokRate);

const nokAmount = 477;
const usdRate = 8.6 / 76;
const dollar = Math.round (nokAmount * usdRate);

printOut ("54 USD =" + nok + "NOK");
printOut ("477 NOK =" + dollar + "USD");


printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const text = "Hello world, here I am!";

printOut ("Length: " + text.length);
printOut ("Character 4: " + text.charAt (4));
printOut ("Substring: "+ text.substring (6, 11));
printOut ("Position of world: " + text.indexOf ("world"));


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const number1 = 10;
const number2 = 20;
const number3 = 10;

printOut (number1 < number2);
printOut (number1 > number2);
printOut (number1 === number3);
printOut (number1 !== number2);
printOut (number1 >= number3);


printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const textNumber = "123";
const textDecimal = "45.67";

const numberValue = Number (textNumber);
const integerValue = parseInt (textDecimal);
const floatValue = parseFloat (textDecimal);

printOut (numberValue);
printOut (integerValue);
printOut (floatValue);

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const r = Math.floor(Math.random() * 360) + 1;
printOut ("Random number: " + r);

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const totalDays = 131;

const weeks = Math.floor(totalDays / 7);
const remainingDays = totalDays % 7;

printOut (" 131 days = " + weeks + " weeks and " + remainingDays + " days");


printOut(newLine);