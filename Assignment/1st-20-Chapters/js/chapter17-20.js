// var arr = [[]];

// var arr = [ 
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];

// for (var i = 0; i <= 10; i++) {
//     document.write("<p>" + i + "</p>");
// }

// var table = Number(prompt("Enter a number to show its multiplication table: "));
// var length = Number(prompt("Enter length multiplication table: "));
// document.write("<h3>Multiplication table of " + table + "</h3>");
// document.write("<h3>Length " + length + "</h3>");
// for (var i = 1; i <= length; i++) {
//     document.write("<p>" + table + " x " + i + " = " + (table*i) + "</p>");
// }

// var fruitNames = ["apple", "banana", "mango", "orange", "strawberry"];
// document.write("<h2>Fruit Names</h2>");
// for (var i = 0; i < fruitNames.length; i++) {
//     document.write("<p>" + fruitNames[i] + "</p>");
// }
// document.write("</br></br>");
// for (var j = 0; j < fruitNames.length; j++) {
//     document.write("<p>Element at index " + j + " is " + fruitNames[j] + "</p>");
// }

// document.write("<h2>Counting:</h2>");
// for (var i = 1; i <= 15; i++) {
//     document.write(i + ", ");
// }
// document.write("</br>");
// document.write("<h2>Reverse counting:</h2>");
// for (var i = 10; i >= 1; i--) {
//     document.write(i + ", ");
// }
// document.write("</br>");
// document.write("<h2>Even:</h2>");
// for (var i = 0; i <= 20; i = i +2) {
//     document.write(i + ", ");
// }
// document.write("</br>");
// document.write("<h2>Odd:</h2>");
// for (var i = 1; i <= 20; i = i + 2) {
//     document.write(i + ", ");
// }   
// document.write("</br>");
// document.write("<h2>Series:</h2>");
// for (var i = 2; i <= 20; i = i + 2) {
//     document.write(i + "k, ");
// }   

// var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// var pointer = false;
// document.write("<h2>ABC BAKERY</h2>");
// for (var i = 0; i < bakeryItems.length; i++) {
//     if (userInput === bakeryItems[i]) {
//         pointer = true;
//         break;
//     }
// }
// if (pointer === true) {
//     document.write("<p>" + userInput + " is <b>available</b> at index " + i + " in our bakery" + "</p>");
// }
// else {
//     document.write("<p>We are sorry, " + userInput + " is <b>not available</b> in our bakery" + "</p>")
// }

// var number = [124, 253, 1, 91, 1000];
// var temp = [];
// document.write("<p>Array items: " + number + "</p>");
// for (var i = 0; i < number.length; i++) {
//     if (temp < number[i]) {
//         temp = number[i];
//     }
// }
// document.write("<p>The largest number is " + temp + "</p>");
// document.write("</br>Press refresh to go home page</br>");

// var number = [24, 53, 78, 9, 12];
// var temp = number[0];
// document.write("<p>Array items: " + number + "</p>");
// for (var i = 0; i < number.length; i++) {
//     if (temp > number[i]) {
//         temp = number[i];
//     }
// }
// document.write("<p>The smallest number is " + temp + "</p>");

// var multiple = 5;
// var ans = 1
// for (var i = 1; i <= 100; i++) {
//     ans = multiple * i;
//     if (ans > 100) {
//         break;
//     }
//     document.write(ans + ", ");
// }
