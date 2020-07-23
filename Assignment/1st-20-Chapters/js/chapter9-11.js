// var city = prompt("Enter City Name:");
// if(city == 'karachi' || city == 'Karachi'){
//     document.write("Welcome to city of lights");
// }
// else{
//     document.write("Nice City");
// }

// var gender = prompt("Please Enter Your gender");

// if(gender == 'Male' || gender == 'male'){
//     document.write("Good Morning Sir");
// }
// else if(gender == 'Female' || gender == 'female'){
//     document.write("Good Morning Ma'am");
// }
// else{
//     document.write("Enter Correct Gender");
// }

// var color = prompt("Enter Traffic light Color");
// if(color == 'red' || color == 'Red'){
//     document.write("Must Stop");
// }
// else if(color == 'Yellow' || color == 'yellow'){
//     document.write("Ready to move");
// }
// else if(color == 'green' || color == 'Green'){
//     document.write("Move now");
// }
// else{
//     document.write("Invalid Input");
// }

// var fuel = prompt("Enter remaining fuel");
// if(fuel < 0.25){
//     document.write("Please refill the fuel in your car");
// }
// else{
//     document.write("Enjoy your Ride");
// }

// var a = 4; if (++a === 5){ alert("given condition for variable a is true"); } 
// var b = 82; if (b++ === 83){ alert("given condition for variable b is true"); } 
// var c = 12; if (c++ === 13){ alert("condition 1 is true"); } if (c === 13){ alert("condition 2 is true"); } if (++c < 14){ alert("condition 3 is true"); } if(c === 14){ alert("condition 4 is true"); } 
// var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost){ alert("The cost equals"); } 
// if (true){ alert("True"); } if (false){ alert("False"); } 
// if("car" < "cat"){ alert("car is smaller than cat"); }

// var sub1 = prompt("Enter Marks of subject#1");
// var sub2 = prompt("Enter Marks of subject#2");
// var sub3 = prompt("Enter Marks of subject#3");
// var totalMarks = 300;
// var obtMarks = Number(sub1) + Number(sub2) + Number(sub3);
// var percentage = ((obtMarks / totalMarks) * 100).toFixed(2);
// document.write("Total Marks: "+totalMarks+"<br/>");
// document.write("Marks Obtained: "+obtMarks+"<br/>");
// document.write("Percentage: "+percentage+"%"+"<br/>");
// if(percentage >= 80){
//     document.write("Grade: A-one <br/>");
//     document.write("Remarks: Excellent <br/>");
// }
// else if(percentage >= 70){
//     document.write("Grade: A <br/>");
//     document.write("Remarks: Good <br/>");
// }
// else if(percentage >= 60){
//     document.write("Grade: B <br/>");
//     document.write("Remarks: You need to improve <br/>");
// }
// else if(percentage < 60){
//     document.write("Grade: Fail <br/>");
//     document.write("Remarks: Sorry <br/>");
// }

// var num = 5;
// var guess = Number(prompt("Guess the number"));
// if(guess == num){
//     document.write("Bingo! Correct answer");
// }
// else if(guess == num+1){
//     document.write("Close enough to the correct answer");
// }
// else{
//     document.write("Try Again");
// }

// var num = Number(prompt("Enter a number to check whether it is divisible by 3 or not"));
// if((num%3) == 0){
//     document.write(num+ " is divisible by 3");
// }
// else{
//     document.write(num+ " is not divisible by 3");
// }

// var num = Number(prompt("Enter a number to check whether it is even or odd"));
// if((num%2) == 0){
//     document.write("The number is even");
// }
// else if(!(num%2) == 0){
//     document.write("The number is odd");
// }

// var temp = Number(prompt("Enter temperature"));
// if(temp > 40){
//     document.write("It is too hot outside.")
// }
// else if(temp > 30){
//     document.write("The Weather today is Normal.")
// }
// else if(temp > 20){
//     document.write("Today’s Weather is cool.")
// }
// else if(temp > 10){
//     document.write("OMG! Today’s weather is so Cool.")
// }
// else{
//     document.write("Uff! Too Cold.")
// }

// var num1 = Number(prompt("Enter first number"));
// var operator = prompt("Operator");
// var num2 = Number(prompt("Enter second number"));
// if(operator == '+'){
//     document.write("Result: "+(num1+num2))
// }
// else if(operator == '-'){
//     document.write("Result: "+(num1-num2))
// }
// else if(operator == 'x' || operator == '*'){
//     document.write("Result: "+(num1*num2))
// }
// else if(operator == '/'){
//     document.write("Result: "+(num1/num2))
// }
// else if(operator == '%'){
//     document.write("Result: "+(num1%num2))
// }