// // var a = 10;

// // document.write('The value of  a is: '+a);
// // document.write('<br/>........................................');
// // document.write('<br/>The value of  ++a is: '+(++a));
// // document.write('<br/>Now the value of  a is: '+a+'<br/>');

// // document.write('<br/>The value of  a++ is: '+(a++));
// // document.write('<br/>Now the value of  a is: '+a+'<br/>');

// // document.write('<br/>The value of  --a is: '+(--a));
// // document.write('<br/>Now the value of  a is: '+a+'<br/>');

// // document.write('<br/>The value of  a-- is: '+(a--));
// // document.write('<br/>Now the value of  a is: '+a);


// // var a = 2, b = 1;
// // var result = --a - --b + ++b + b--;
// // // --a = 1
// // // --a - --b = 1
// // // --a - --b + ++b = 2
// // // --a - --b + ++b + b-- = 3

// // document.write("<br/>The value of a is: "+a+"<br/>")
// // document.write("<br/>The value of b is: "+b+"<br/>")
// // document.write("<br/>The Result is: "+result)

// // var name = prompt("Enter your name");
// // alert("Hello! "+name);

// // var a = prompt("Table of: ");
// // var num = parseInt(a);
// // for(var i = 1; i <=10 ; i++){
// //     if(!num){
// //         document.write(5 +' x '+ i  +' = '+ (5 * i )+'<br/>');
// //     }
// //     else{
// //         document.write(num +' x '+ i  +' = '+ (num * i )+'<br/>');
// //     }
// // }


// var sub1 = prompt("Enter first subject name");
// var sub2 = prompt("Enter Second subject name");
// var sub3 = prompt("Enter Third subject name");
// var submarks = 100;
// var totalmarks = submarks * 3;
// var obtsub1 = prompt("Enter "+sub1+" subject marks");
// var obtsub2 = prompt("Enter "+sub2+" subject marks");
// var obtsub3 = prompt("Enter "+sub3+" subject marks");

// var persub1 = ((obtsub1 /submarks) * 100).toFixed(2);
// var persub2 = ((obtsub2 /submarks) * 100).toFixed(2);
// var persub3 = ((obtsub3 /submarks) * 100).toFixed(2);

// var obtmarks = Number(obtsub1) + Number(obtsub2) + Number(obtsub3);
// var percentage = ((obtmarks/totalmarks) * 100).toFixed(2);

// document.write('<table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr><tr><td>'+sub1+'</td><td>'+submarks+'</td><td>'+obtsub1+'</td><td>'+persub1+'%</td></tr><tr><td>'+sub2+'</td><td>'+submarks+'</td><td>'+obtsub2+'</td><td>'+persub2+'%</td></tr><tr><td>'+sub3+'</td><td>'+submarks+'</td><td>'+obtsub3+'</td><td>'+persub3+'%</td></tr><tr><td></td><td><strong>'+totalmarks+'</strong></td><td><strong>'+obtmarks+'</strong></td><td><strong>'+percentage+'%</strong></td></tr></table>')
