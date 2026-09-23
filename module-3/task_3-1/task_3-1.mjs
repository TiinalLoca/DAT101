"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
let wakeUpTime = 9;
if (wakeUpTime === 7) {
    printOut ("I can take the bus to school");
}
else if (wakeUpTime === 8) {
    printOut ("I can take the train to school");
}
else {
    printOut ("I have to take the car to school");
}

printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let number = 0;
if (number > 0) {
    printOut ("Positive");
}
else if (number < 0) {
    printOut ("Negative");
}
else {
    printOut ("Zero");
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let photoSize = Math.floor(Math.random() * 8) + 1;
printOut ("Photo size = " + photoSize + " MP");
if (photoSize >= 4) {
    printOut("Thank you");
}
else {
    printOut("Please upload a larger photo");
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let imageSize2 = Math.floor(Math.random() * 8) + 1;
printOut ("Photo size = " + imageSize2 + " MP");
if (imageSize2 >= 6) {
    printOut ("Image is too large");
}
else if (imageSize2 >= 4) {
    printOut ("Thank you");
}
else {
    printOut ("Please upload a larger photo");
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList = ["January", "February", "Mars", "April", "Mai", "June", "July", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
printOut (monthName);
if (monthName.includes("r")){
    printOut ("You must take vitamin D");
}
else {
    printOut ("You do not need to take vitamin D");
}

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList2 = ["January", "February", "Mars", "April", "Mai", "June", "July", "August", "September", "October", "November", "December"];
const noOfMonth2 = monthList2.length;
const monthName2 = monthList2[Math.floor(Math.random() * noOfMonth2)];
printOut (monthName2);
if (["January", "Mars", "Mai", "July", "August", "October", "December"].includes(monthName2)) {
    printOut ("31 days");
}
else if (monthName2 === "February") {
    printOut ("28 days");
}
else {
    printOut ("30 days");
}

printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
if (monthName === "April") {
    printOut ("The gallery is open in temporary premises");
}
else if (monthName === "Mars" || monthName === "Mai") {
    printOut ("The gallery is closed for refurbishment");
}
else {
    printOut ("The gallery is open");
}

printOut(newLine);
