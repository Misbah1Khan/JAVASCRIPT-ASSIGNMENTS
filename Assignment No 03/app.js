// Question No: 01
let sdName = [];

// Question No: 02
let stdName = {};

// Question No: 03
let string = ["Ahmed", "Ali", "Misbah"];

// Question No: 04
let int = [123, 456, 789];

// Question No: 05
let bool = [ true, false];

// Question No: 06
let num = [123, "Misbah", true];

// Question No: 07
let edu = ["SSC", "HSC", "BSC", "BS", "BCOM", "MS", "M.Phil", "PhD"];
document.write("QUALIFICATION: <br><br>");
document.write("(1) ",edu[0],"<br>");
document.write("(2) ",edu[1],"<br>");
document.write("(3) ",edu[2],"<br>");
document.write("(4) ",edu[3],"<br>");
document.write("(5) ",edu[4],"<br>");
document.write("(6) ",edu[5],"<br>");
document.write("(7) ",edu[6],"<br>");
document.write("(8) ",edu[7],"<br>");


// Question No: 08
let StdName = ["Michael","John", "Tony"];
let score = [320,230,480];
document.write(`Score of ${StdName[0]} is ${score[0]}. Percentage: ${score[0]/500 * 100}% <br>`);
document.write(`Score of ${StdName[1]} is ${score[1]}. Percentage: ${score[1]/500 * 100}% <br>`);
document.write(`Score of ${StdName[2]} is ${score[2]}. Percentage: ${score[2]/500 * 100}% <br>`);

// Question No: 09

let color = ["red", "blue", "black", "orange", "brown" ];
document.write(color,"<br>");

let begColor = prompt("What color do you want to add in the begining of the array?");
color.unshift(begColor);
document.write(color,"<br>");

let endColor = prompt("What color do you want to add in the end of the array?");
color.push(endColor);
document.write(color,"<br>");
color.unshift("green", "yellow");
document.write(color,"<br>");
color.shift();
document.write(color,"<br>");
color.pop();
document.write(color,"<br>");

let index = +prompt("Which index do you want to add color?");
let adColor = prompt("Which color do you want to add?");
color.splice(index, 0 , adColor);
document.write(color,"<br>");

let windex = +prompt("Which index do you want to delete color?");
let hindex = +prompt("How many color do you want to delete?");
color.splice(windex, hindex);
 document.write(color,"<br>");

// Question No: 10
let stdScore = [320,230,480,120];
document.write("Scores of Students: ", stdScore, "<br>");
function compareNumbers(a, b) {
    return a - b;
  }
stdScore.sort(compareNumbers);
document.write("Ordered Scores of Students: ", stdScore);


// Question No: 11

let cities = ["karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
let selCities = [];
selCities = cities.slice(1, 4);
document.write("Cities array:", cities,"<br>");
document.write("Selected cities array:", selCities);

// Question No: 12

let arr = ["This ", "is", " my", " cat"];
document.write("Array: ", arr,"<br><br>");
document.write("String: ", arr.join(''),"<br>");

// Question No: 13

let fifoArr = [];

fifoArr.push("Keyboard");
fifoArr.push("Mouse");
fifoArr.push("Printer");
fifoArr.push("Monitor");

document.write(`Devices: <br>${fifoArr}`);

let Value1 = fifoArr.shift();
let Value2 = fifoArr.shift();
let Value3 = fifoArr.shift();
let Value4 = fifoArr.shift();

document.write(`<br><br><br>Out: <br>${Value1}<br><br>Out: <br>${Value2}<br><br>Out: <br>${Value3}<br><br>Out: <br>${Value4}<br><br>`);

// Question No: 14

let lifoArr = [];

fifoArr.push("Keyboard");
fifoArr.push("Mouse");
fifoArr.push("Printer");
fifoArr.push("Monitor");

document.write(`Devices: <br>${fifoArr}`);

let value1 = fifoArr.pop();
let value2 = fifoArr.pop();
let value3 = fifoArr.pop();
let value4 = fifoArr.pop();

document.write(`<br><br><br>Out: <br>${value1}<br><br>Out: <br>${value2}<br><br>Out: <br>${value3}<br><br>Out: <br>${value4}<br><br>`);


// Question No: 15

let phone =["Apple", "Samsung", "Nokia", "motorola", "Sony", "Haier"];

document.write(`<select name="" id=""

<option value = "option1">${phone[0]}</option> 
<option value = "option2">${phone[1]}</option> 
<option value = "option3">${phone[2]}</option> 
<option value = "option4">${phone[3]}</option> 
<option value = "option5">${phone[4]}</option> 
<option value = "option6">${phone[5]}</option> 

</select>`)

