// function power(a, b){
//     let number = a;
//     let power  = b;
//     for (var i = 1; i < power; i++){
//         number = number * a;
//     }
//     document.write("<br>value of "+a+" raised to "+b+" is: "+number);
// }
// power(4,2);

// function leapYear(year){
//     let check = year%4;
//     if(check == 0){
//         document.write("Leap Year");
//     }
//     else{
//         document.write("It's not a leap Year");
//     }
// }
// leapYear(2020);

// function S(a,b,c){
//     let S = (a+b+c)/2;
//     area(S,a,b,c);
//     // document.write(S)
// }
// function area(S,a,b,c){
//     let area = S * (S - a) * (S - b) *(S - c);
//     document.write("Area: "+area.toFixed(2));
// }
// S(1,1,1)

// function mainFunction(mark1, mark2, mark3){
//     let average_value;
//     let percentage_value;
//     average(mark1,mark2,mark3);
//     function average(mark1, mark2, mark3){
//         average_value = (mark1 + mark2 + mark3)/3;
//     }
//     document.write("Average: "+average_value.toFixed(2));
//     pecentage(mark1, mark2, mark3);
//     function pecentage(mark1, mark2,mark3){
//         percentage_value = ((mark1 + mark2 + mark3)/300) * 100;
//     }
//     document.write("<br>Percentage: "+percentage_value.toFixed(2));
// }

// mainFunction(50,100,100);