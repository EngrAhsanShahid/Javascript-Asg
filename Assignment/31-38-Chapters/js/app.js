// var today = new Date()
// document.write(today)

// let date = new Date();
// var month = new Array();
// month[0] = "January";
// month[1] = "February";
// month[2] = "March";
// month[3] = "April";
// month[4] = "May";
// month[5] = "June";
// month[6] = "July";
// month[7] = "August";
// month[8] = "September";
// month[9] = "October";
// month[10] = "November";
// month[11] = "December";
// var n = month[date.getMonth()];
// document.write("Current month: "+n);

// let date = new Date();
// var weekday = new Array(7);
// weekday[0] = "Sunday";
// weekday[1] = "Monday";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6] = "Saturday";
// var n = weekday[date.getDay()];
// document.write("Today is: "+n);

// let date = new Date();
// var weekday = new Array(7);
// weekday[0] = "Sunday";
// weekday[1] = "Monday";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6] = "Saturday";
// var n = weekday[date.getDay()];
// if(n == 'Saturday' || n == 'Sunday'){
//     document.write("It's Fun day");
// }

// let date = new Date();
// var n = date.getDate();
// if(n < 16){
//     document.write("First fifteen days of the month");
// }
// else if(n >= 16){
//     document.write("Last fifteen days of the month");
// }

// let date = new Date();
// let  n = date.getHours();
// if(n < 12 ){
//     document.write("It's AM")
// }
// else if(n >= 12 ){
//     document.write("It's PM")
// }

// let age = prompt("Enter your age");
// let date = new Date();
// let year = date.getFullYear();
// let get_year = year - age;
// document.write("Your age is: "+age);
// document.write("<br>Your birth year is: "+get_year);

// let name = prompt("Enter Name:");
// let month = prompt("Enter month");
// let unit = prompt("Enter unit");
// let charge = prompt("Enter charge per unit");
// let late_payment = 350;
// let net_amount = Number(unit) * Number(charge);
// let gross_amount = net_amount + late_payment;

// document.write("<h1>K-Electric Bill</h1>");
// document.write("<br>Customer Name: "+name);
// document.write("<br>Month: "+month);
// document.write("<br>Number of units: "+unit);
// document.write("<br>Charge per unit: "+unit);
// document.write("<br><br>Net Amount Payable (within Due Date): "+net_amount.toFixed(2));
// document.write("<br>Late payable surcharge: "+late_payment);
// document.write("<br>Gross  Amount Payable (after Due Date): "+gross_amount.toFixed(2));

// function date(){
//     return new Date();
// }
// document.write(date());

// function getName(first,last){
//     return document.write("Welcome "+first+ " "+last)
// }
// getName("Ahsan","Shahid");

// function add(a,b){
//     return document.write(a + b);
// }
// add(2, 2);

// function calc(a,op,b){
//     if(op == '+'){
//         return document.write("Sum: "+(a + b));
//     }
//     if(op == '-'){
//         return document.write("Minus: "+(a - b));
//     }
//     if(op == '*'){
//         return document.write("Multiply: "+(a * b));
//     }
//     if(op == '/'){
//         return document.write("Divide: "+(a / b));
//     }
// }
// calc(2, "-" ,2)

// function square(a){
//     return document.write(a * a);
// }
// square(4)

// function factorial(a){
//     let b;
//     for(var i = a - 1; i >= 1 ; i--){
//         a = a * i;
//     }
//     document.write(a)
// }
// factorial(5);

// function counting(a,b){
//     for(var i = a ; i <= b ; i++){
//         document.write(i+"<br>");
//     }
// }
// counting(2,8)

// function calculateHypotenuse(base, perp){
//     let num;
//     Hyp = calculateSquare(base) + calculateSquare(perp)
//     function calculateSquare(num){
//         return num = num * num;
//     }
//     document.write("Hypotenuse: "+Hyp)
// }
// calculateHypotenuse(3, 2)

// function area(width, height){
//     let a = width * height;
//     document.write("<br>Value: "+a);
//     document.write("<br>Variable: "+a);
// }
// let width = 2;
// let height = 3;
// area(3, 2);
// area(width, height);

// function palind_rome(str){
//     for(var i = str.length-1; i >= 0; i--){
        
//     }
// }
// palind_rome("eletronics")\

// function capital(str){
//     let split = str.split(" ");
//     let slice1 = split[0].slice(0);
//     let slice2 = split[1].slice(0);
//     let slice3 = split[2].slice(0);
//     let slice4 = split[3].slice(0);
//     let uppercase1 = toUpperCase()
//     document.write(slice1[0]);
//     document.write(slice2[0]);
//     document.write(slice3[0]);
//     document.write(slice4[0]);
// }

// function longest(text){
//     let split = text.split(" ");
//     let length;
//     document.write(split)
//     for(var i = 0 ; i <= text.length; i++){
//         length = split[i].length;
//         document.write("<br>length: "+length)
//     }
// }
// longest("Web Development Tutorial");

// function calcCircumference(radius){
//     let Circumference_of_circle = 2 * Math.PI * radius;
//     document.write("Circumference_of_circle= "+Circumference_of_circle.toFixed(2));
// }
// function calcArea(radius){
//     let Area_of_circle = Math.PI * radius *2;
//     document.write("<br>Circumference_of_circle= "+Area_of_circle.toFixed(2));
// }
// calcCircumference(2);
// calcArea(2);