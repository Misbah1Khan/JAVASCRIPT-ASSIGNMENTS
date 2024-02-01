// CHAPTER 17 - 20

// Question No:01

// let arr = [];
// // Question No:02
// let arr2 = [
//     [],
//     [],
//     []
// ];

// arr2[0][0] = 1;
// arr2[0][1] = 2;
// arr2[0][2] = 3;

// arr2[1][0] = 4;
// arr2[1][1] = 5;
// arr2[1][2] = 6;

// arr2[2][0] = 7;
// arr2[2][1] = 8;
// arr2[2][2] = 9;

// console.log(arr2);

// Question No: 03

// for (var i = 1; i <= 10; i++) {
// console.log(i);
// }

// // Question No: 04

// var tab = +prompt("Enter a number to show its table.");
// var len = +prompt("Enter a length of the table.");

// for (var i = 1; i <= len; i++) {
//     console.log(`${tab} x ${i} = ${tab*i}`);
//     }

// Question No: 05

// var fruits = ["apple" , "banana" , "orange" , "mango" , "stawberry"];

// for (var i = 0; i < fruits.length; i++) {
//     console.log(fruits[i] );
//     console.log(`Element at index ${i} is ${fruits[i]}`);
//     }

// Question No: 06

// a. Counting
// let countingSeries = '';
// for (let i = 1; i <= 15; i++) {
//   countingSeries += i + ', ';
// }
// console.log('Counting: ' + countingSeries); // Remove the trailing comma

// // b. Reverse counting
// let reverseCountingSeries = '';
// for (let i = 10; i >= 1; i--) {
//   reverseCountingSeries += i + ', ';
// }
// console.log('Reverse Counting: ' + reverseCountingSeries);

// // c. Even
// let evenSeries = '';
// for (let i = 0; i <= 20; i += 2) {
//   evenSeries += i + ', ';
// }
// console.log('Even: ' + evenSeries);

// // d. Odd
// let oddSeries = '';
// for (let i = 1; i <= 19; i += 2) {
//   oddSeries += i + ', ';
// }
// console.log('Odd: ' + oddSeries);

// // e. Series: 2k, 4k, 6k, ...
// let series = '';
// for (let i = 1; i <= 10; i++) {
//   series += (i * 2) + 'k, ';
// }
// console.log('Series: ' + series);


// CHAPTER 21 - 25

// Question No: 01

// let fName = prompt("Enter your first name.");
// let lName = prompt("Enter your last name.");
// let fullName = `${fName} ${lName}`;

// console.log(fullName);

// alert(`Hello! ${fullName}`);

// Question No: 02

// var mob = prompt("Enter your favourite mobile phone model.");

// document.write(`My favourite phone is: ${mob}<br>`);
// document.write(`Length of the string: ${mob.length}`);


// Question No: 03

// var con = "Pakistani"

// document.write(`String: ${con}<br>`);
// document.write(`Length of index 'n': ${con.indexOf("n")}`);


// Question No: 04

// var con = "Hello World"

// document.write(`String: ${con}<br>`);
// document.write(`Last index of 'l': ${con.lastIndexOf("l")}`);

// Question No: 05

// var con = "Pakistani"

// document.write(`String: ${con}<br>`);
// document.write(`character index of 3: ${con.charAt(3)}`);


// Question No: 06

// let fName = prompt("Enter your first name.");
// let lName = prompt("Enter your last name.");
// let fullName = `${fName.concat(lName)} `;

// console.log(fullName);

// alert(`Hello! ${fullName}`);


// Question No: 07

// var cit = "Hyderabad"

// var rep = cit.replace("Hyder" , "Islam");

// console.log(rep);

// document.write(`City: ${cit}<br>`);
// document.write(`After Replacement: ${rep}`);


// Question No: 08

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var rep = message.replace("and" , "&");

// console.log(rep);

// document.write(`Message: ${message}<br>`);
// document.write(`After Replacement: ${rep}`);

// Question No: 09

// var num = "472"
// var int = parseInt(num)

// document.write(`Value: ${num}<br>`);
// document.write(`Type: ${typeof(num)}<br>`);
// document.write(`Value: ${int}<br>`);
// document.write(`Type: ${typeof(int)}`);

// Question No: 10

// var nam = "Peanut"
// var upp = nam.toUpperCase();

// document.write(`Name: ${nam}<br>`);
// document.write(`Upper Case: ${upp}<br>`);

// Question No: 11

// var nam = 35.36
// var upp = Math.round(nam);

// document.write(`Number: ${nam}<br>`);
// document.write(`Result: ${upp}<br>`);


// CHAPTER 26 - 30

// Question No: 1

// var num = +prompt("Enter a Number")
// var roun = Math.round(num);
// var floor = Math.floor(num);
// var ceil = Math.ceil(num);

// document.write(`Number: ${num}<br>`);
// document.write(`Round off value: ${roun}<br>`);
// document.write(`Floor value: ${floor}<br>`);
// document.write(`Ceil value: ${ceil}<br>`);

// Question No: 2

// var num = +prompt("Enter a Number")
// var roun = Math.round(num);
// var floor = Math.floor(num);
// var ceil = Math.ceil(num);

// document.write(`Number: ${num}<br>`);
// document.write(`Round off value: ${roun}<br>`);
// document.write(`Floor value: ${floor}<br>`);
// document.write(`Ceil value: ${ceil}<br>`);

// Question No: 3

// var num  = 4;

// var ab = num.toFixed(4);
// document.write(`user input: ${num}<br>`);
// document.write(`Absolute Value: ${ab}<br>`);

// Question No: 4

// function rollDice() {
//     return Math.ceil(Math.random() * 6);
// }

// let diceValue = rollDice();
// document.write(`Random dice Value: ${diceValue}<br>`);

// Question No: 5

// function toss() {
//     return Math.ceil(Math.random() * 2);
// }

// let tos = toss();
// document.write(`toss Value: ${tos}<br>`);


// Question No: 6

// function random() {
//     return Math.ceil(Math.random() * 100);
// }

// let ran = random();
// document.write(`Random: ${ran}<br>`);

// Question No: 7

// let secnum = Math.ceil(Math.random() * 10);
// let user = +prompt("Enter a number from 1-10.");

// for (let i = 1; i <= secnum; i++) {
//   if (i === user) {
//     alert(`Congratulations! You guessed the correct number.`);
//     break; 
//   } else if (i === secnum) {
//     alert(`Sorry! The correct number was ${secnum}. Try again!`);
//   }
// }
