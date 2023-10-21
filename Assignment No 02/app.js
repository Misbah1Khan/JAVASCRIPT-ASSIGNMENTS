//CHAPTER NO: 05

//QUESTION NO: 01

//var num1 = prompt("Enter first number");
//var num2 = +prompt("Enter second number");
//var res = num1+num2;
//document.write("Sum of "+ a + " and "+ b +" is " + c+"</br>");

//QUESTION NO: 02
/*var a = +prompt("Enter first number");
var b = +prompt("Enter second number");
var sub = a-b;
var mul = a*b;
var div = a/b;
var mod = a%b;
document.write("Subtraction of "+ a + " and "+ b +" is " + sub+"</br>");
document.write("Division of "+ a + " and "+ b +" is " + div+"</br>");
document.write("Multiplication of "+ a + " and "+ b +" is " + mul+"</br>");
document.write("Modulus of "+ a + " and "+ b +" is " + mod+"</br>");
*/

//QUESTION NO: 03

/*var v  
document.write("Value after declaration is: "+ v+"</br>")
var a= 5
document.write("Initial Value is: "+ a+"</br>")
a++
document.write("Value after increment is: "+ a+"</br>")
a+= 5
document.write("Value after addition is: "+ a+"</br>")
a--
document.write("Value after decrement is: "+ a+"</br>")
var mod = a%5;
document.write("The remainder is: "+ mod+"</br>")*/

//QUESTION NO: 04

/*var n = +prompt("How many Tickets you want to buy")
var tp = 600
var res = tp * n
document.write("Total cost to buy "+n+ " tickets to a movie is "+res+"</br>")*/

//QUESTION NO: 05
/*var n = +prompt("Enter a number")
document.write("Table of "+ n+ "</br>")
for (let i = 1; i <= 10; i++) {
document.write(n+" x "+ i +" = "+ n*i+"</br>" )    
}*/

//QUESTION NO: 06
/*var celsius = prompt("Enter celsius");
var ferrenheit = (celsius * 9/5  + 32);
document.write(celsius +" °C is " +ferrenheit+" °F </br>");
var cel = (ferrenheit - 32 * 9/5)
document.write(ferrenheit+ " °F is "+cel+" °C <br>");*/

//QUESTION NO: 07
/*var item1 = 650
var item2 = 100
var del  = 100
var quan1 = +prompt("Enter the Quantity of items1")
var quan2 = +prompt("Enter the Quantity of items2")
var total = (item1*quan1) + (item2*quan2) + del
document.write("Price of item1 is: "+item1+"</br>")
document.write("Quantity of item1 is: "+quan1+"</br>")
document.write("Price of item2 is: "+item2+"</br>")
document.write("Quantity of item2 is: "+quan2+"</br>")
document.write("Shipping cahrges is: "+del+"</br>")
document.write("Total cost of your order is: "+total+"</br>")*/

//QUESTION NO: 08
/*var tn = +prompt("Enter total number")
var mo = +prompt("Enter marks obtianed")
var per = (mo/tn) * 100
document.write("<h1>MarkSheet</h1>")
document.write("Total Marks = "+tn+"</br>")
document.write("Marks Obtianed = "+mo+"</br>")
document.write("Percentage = "+per+"%</br>")*/

//QUESTION NO: 09
/*var us = 104.80
var sr = 28
var res = (10 * us) + (25 * sr)
document.write("<h2>Currency in PKR</h2></br></br>")
document.write("Total Currency in PKR is: "+res+"</br>")*/

//QUESTION NO: 10

/*var n = +prompt("Enter a number")
var add = n+5
var mul = n*10
var div = n/2
document.write("Add 5:"+ add+"<br>Multiply by 10: "+mul+"<br>Divided by 2: "+div)*/

//QUESTION NO: 11
/*var by = +prompt("Enter birth year")
var cy = 2023
var res = br-cy
document.write("<h2>Age Calculator</h2></br></br>")
document.write("Birth year = "+by+"</br>")
document.write("Current year = "+cy+"</br>")
document.write("Total Age is = "+res+"</br>")*/

//QUESTION NO: 12
/*var rad = +prompt("Enter radius")
var cf = 2 * 3.142 * rad 
var area = 3.142 * rad * rad 
document.write("Radius is: "+rad+"</br>")
document.write("Circumference is: "+cf+"</br>")
document.write("Area is: "+area+"</br>")*/

//QUESTION NO: 13
/*var snacks = "Diary Milk"
var currentAge = 15;
var expectAge = 60;
var amountSnack = 2;
var yourNeed = ( expectAge - currentAge) * amountSnack;
document.write("Favourite Snacks :" + " " + snacks + "<br>");
document.write("Current Age :" + " " + currentAge  + "<br>");
document.write("Estimated Maximum Age :" + " " + expectAge + "<br>")
document.write("You will need "+  yourNeed+ " to last until the ripe old age of " +expectAge);*/

//CHAPTER NO: 06

//QUESTION NO: 1

/*var  a = 10
document.write("The value of a is: "+a+"</br>")
document.write("----------------------------------</br>")
++a
document.write("The value of ++a is: "+a+"</br>")
a++
document.write("The value of a++ is: "+a+"</br>")
--a
document.write("The value of --a is: "+a+"</br>")
a--
document.write("The value of a-- is: "+a+"</br>")*/

//QUESTION NO: 2

/*var a = 2
var b = 1
var res = --a - --b + ++b + b--;
document.write("a is: "+a+"</br>")
document.write("b is: "+b+"</br>")
document.write("Result is: "+res+"</br>")*/

//QUESTION NO: 3

//var nam = prompt("Enter your Name:")
//document.write("Hello "+nam)


//QUESTION NO: 4

/*var n = +prompt("Enter a number")
document.write("Table of "+ n+ "</br>")
for (let i = 1; i <= 10; i++) {
    document.write(n+" x "+ i +" = "+ n*i+"</br>" ) 
}*/

//QUESTION NO: 5

/*var sub01 = prompt("Enter your first Subject Name");
var sub02 = prompt("Enter your Second Subject Name");
var sub03 = prompt("Enter your Third Subject Name");
var Marks01 = +prompt("Enter your " + sub01 + " subject scores");
var Marks02 = +prompt("Enter your " + sub02 + " subject scores");
var Marks03 = +prompt("Enter your " + sub03 + " subject scores");
var totalMarks = 100;
var Percentage = (((Marks01 / totalMarks) * 100) + ((Marks02 / totalMarks) * 100) + ((Marks03 / totalMarks) * 100)) / 3;
var totalObtainMarks = Marks01 + Marks02 + Marks03;

document.write(
     "<table>" +
     "<tr>" +
     "<td><b>Subject  | </b></td>" +
     "<td><b>Total Marks  | </b></td>" +
     "<td><b>Obtained Marks  | </b></td>" +
     "<td><b>Percentage</b></td>" +
     "</tr>" +
     "<tr>" +
     "<td>" + sub01 + "</td>" +
     "<td> | " + totalMarks + "</td>" +
     "<td> | " + Marks01 + "</td>" +
     "<td> | " + (Marks01 / totalMarks) * 100 + "%" + "</td>" +
     "</tr>" +
     "<tr>" +
     "<td>" + sub02 + "</td >" +
     "<td> | " + totalMarks + "</td>" +
     "<td> | " + Marks02 + "</td>" +
     "<td> | " + (Marks02 / totalMarks) * 100 + "%" + "</td>" +
     "</tr >" +
     "<tr>" +
     "<td>" + sub03 + "</td>" +
     "<td> | " + totalMarks + "</td>" +
     "<td> | " + Marks03 + "</td>" +
     "<td> | " + (Marks03 / totalMarks) * 100 + "%" + "</td>" +
     "</tr>" +
     "<tr>" +
     "<td><b>Result</b></td>" +
     "<td><b> | " + (totalMarks + totalMarks + totalMarks) + "</b></td>" +
     "<td><b> | " + totalObtainMarks + "</b></td>" +
     "<td><b> | " + Percentage + "%" + "</b></td>" +
     "</tr>" +
     "</table >");*/


//CHAPTER NO: 9 & 10
     
//QUESTION NO: 1

/*var city = prompt("Enter the name of the city:")
if (city === "Karachi" ) {
    document.write("Welcome to the city of lights </br>")
} else {
    document.write("Welcome to "+ city)

}*/

//QUESTION NO: 2

/*var gen = prompt("Enter your Gender:")
if (gen === "Male") {
    document.write("Good Morning, Sir")
} else if(gen === "Female") 
{
    document.write("Good Morning, Maam")
}*/

//QUESTION NO: 3

/*var col = prompt("Enter Color:")
if (col === "Red") {
    document.write("Must Stop")
} 
else if(col === "Yellow") 
{
    document.write("Ready to move")
}
else if(col === "Green") 
{
    document.write("Move Now")
}*/

//QUESTION NO: 4

/*var pet = +prompt("Enter remaining fuel in the car")
if (pet < 0.25) {
    document.write("Please refill the fuel in your car")
} else {
    document.write("Continue your ride")
}*/

//QUESTION NO: 5

 /*var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
 if (true){
alert("True");
}
if (false){
alert("False");
}
 if("car" < "cat"){
    alert("car is smaller than cat");
    }
*/

//QUESTION NO: 6

/*var totalMarks = +prompt('Enter Your Total Marks');
var obtainedMarks = +prompt("Enter Your Obtained Marks");
var percentage = (obtainedMarks / totalMarks) * 100;
var grade = ""
var remarks = ""
document.write('Total Marks :' + " "+ totalMarks + "<br>");
document.write("Marks obtained :" + " " + obtainedMarks+ "<br>");
document.write("Percentage :" + " " + percentage + "%" + "<br>");

if (percentage <= 40){
   grade = "Failed"
   remarks = "sorry"
}else if(percentage <= 50){
   grade = "D"
   remarks = "unsatifactory"
}else if(percentage <= 60 ){
   grade = "C"
   remarks = "satifactory"
}else if(percentage <= 70){
   grade = "B"
   remarks = "Good"
}else if(percentage <= 80){
   grade = "A"
   remarks = "Very Good"
}else if(percentage <= 100){
   grade = "A+"
   remarks = "Excellent"
};

document.write("Grade :" +" " + grade + "<br>");
document.write("Remarks :" +" " + remarks + "<br>");*/

//QUESTION NO: 7

/*var a = 5
var guess = +prompt("Guess the secret number")
if (guess === 5) {
    document.write("Bingo! Correct answer")
} else if(guess === 6){
    document.write("close enough to the correct answer")
} 
else {
    document.write("Better luck!! Try again")
}*/

//QUESTION NO: 8

/*var num =+prompt("Enter a number")
if (num % 3 === 0 ) {
    document.write(num+" is divisible by 3")
} else {
    document.write(num+" is not divisible by 3")
}*/

//QUESTION NO: 9

/*var num =+prompt("Enter a number")
if (num % 2 === 0 ) {
    document.write(num+" is even number")
} else {
    document.write(num+" is odd number")
}*/

//QUESTION NO: 10

/*var temp = +prompt("Enter temperature:")
if (temp > 40) {
    document.write("It is too hot outside.")
} else if(temp > 30) {
    document.write("The Weather today is Normal.")
}
else if(temp > 20) {
    document.write("Today’s Weather is cool.")
}
else if(temp > 10) {
    document.write("OMG! Today’s weather is so Cool.")
}*/

//QUESTION NO: 10

/*var num1 = +prompt("Enter a number 1");
var oprator = prompt("Which operation do you want to perform? (/,*,+,-,% )");
var num2 = +prompt("Enter a number 2");
var result = "";
var result1 = "";


 if( oprator === "+"){
    result1 = num1 + num2;
    result = "Addition of "+num1+" and "+num2+" is "+result1
 }else if (oprator === "-" ){
    result1 = num1 - num2;
    result = "Subtraction of "+num1+" and "+num2+" is "+result1
 }else if( oprator === "/"){
    result1 = num1 / num2;
    result = "Division of "+num1+" and "+num2+" is "+result1
 }else if(oprator === "%"){
    result1  = num1 % num2;
    result = "Modulus of "+num1+" and "+num2+" is "+result1
 }else if(oprator === "*"){
   result1  = num1 * num2;
   result = "multiplication of "+num1+" and "+num2+" is "+result1
}

document.write(result+ "<br>");*/