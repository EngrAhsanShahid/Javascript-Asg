// Assignment Chapter 21-25
// var first_name = prompt("Enter First Name");
// var second_name = prompt("Enter Second Name");
// document.write("Welcome "+first_name+" "+second_name);

// var mobile_phone = prompt("Enter Your favorite mobile phone model");
// var length = mobile_phone.length;
// document.write("My favorite phone is "+mobile_phone+ " Length of string: "+length);

// var word = "Pakistani";
// var index = word.charAt(3);
// document.write("String: "+word);
// document.write("<br>Character at index 3: "+index);

// var word = "Pakistani";
// var index = word.indexOf('n');
// document.write("String: "+word);
// document.write("<br>Index of 'n' : "+index);

// var word = "Hello World";
// var index = word.lastIndexOf('l');
// document.write("String: "+word);
// document.write("<br>Last index of 'l : "+index);

// var first_name = prompt("Enter First Name");
// var second_name = prompt("Enter Second Name");
// var concat = first_name +" " + " "+ second_name;
// document.write("Welcome "+concat);

// var city = "Hyderabad";
// var replace = city.replace("Hyderabad" ,"Islamabad");
// document.write("City: "+city+ " <br>After Replacement: "+replace);

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replace_all = message.replace(/and/gi ,"&");
// document.write("Message: "+replace_all); 

// var string = "472";
// document.writeln("Value: " +string);
// document.writeln("<br>Type: " +typeof(string));
// var Number = parseInt(string);
// document.writeln("<br>Value: " +string);
// document.writeln("<br>Type: " +typeof(Number));

// var input = prompt("Enter Something");
// var upperCase = input.toUpperCase();
// document.writeln("User Input: "+input);
// document.writeln("<br>Upper case: "+upperCase);

// var input = prompt("Enter Something");
// var slice = input.slice(0, 1);
// var substring = input.substring(1);
// var upperCase  = slice.toUpperCase();
// var fulltext = upperCase +  substring;
// document.writeln("User Input: "+input);
// document.writeln("<br>Title case: "+fulltext);

// var num = 35.56;
// var string = num.toString();
// var replace = string.replace(".","");
// document.writeln("Number: "+string);
// document.writeln("<br>Result: "+replace);

// var username = prompt("Enter username:");
// for(var i = 0; i <= username.length; i++){
//     if(username[i] == "!" || username[i] == "," || username[i] == "." || username[i] == "@"){
//         alert("Please enter a valid  username \n Note:ASCII code of ! is 33 \n ASCII code of , is 44 \n ASCII code of . is 46 \n ASCII code of @ is 64")
//     }
// }


// var item = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?")
// var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];

// Case1
// var lowerCase = item.toLowerCase();
// var find = bakery.includes(lowerCase);
// var index = bakery.indexOf(lowerCase)
// if(find == true){
//     document.writeln(lowerCase+" is available at index "+index+" in our bakery");
// }

// Case2
// var lowerCase = item.toLowerCase();
// var boolean = 0;
// for(var i = 0; i < bakery.length; i++){
//     if(bakery[i] == item){
//         boolean = 1;
//         var index = bakery.indexOf(item);
//         ++index;
//     }
// }
// if(boolean == 1){
//     document.writeln(item+" is available at index "+index+" in our bakery");
// }
// else{
//     document.writeln("We are sorry. "+item+" is <strong>not avaiable</strong> in our bakery");
// }

// var password = prompt("Enter password:");
// var slice = password.slice(0, 1);
// if(slice == '0' || slice == '1' || slice == '2' || slice == '3' || slice == '4' || slice == '5' || slice == '6' || slice == '7' || slice == '8' || slice == '9' ){
//     alert("Password can not begin with a number\nPlease enter a valid password");
// }
// var length = password.length;
// if(length < 6){
//     alert("Password must contain 6 charaters")
// }

// var university = "University of Karachi";
// var split = university.split('');
// console.log(split)
// for(var i = 0; i < split.length; i++){
//     document.writeln(split[i]+"<br>")
// }

// var user_input = prompt("Enter Something");
// var length = user_input.length-1;
// var char = user_input.charAt(length);
// document.writeln("Last character of input: "+char);

// var string = "The quick brown fox jumps over the lazy dog";
// var lowerCase = string.toLowerCase();
// var split = lowerCase.split(" ");
// console.log(split)
// var no = 0;
// for (var i = 0; i < split.length; i++){
//     if(split[i] == "the"){
//         console.log(++no)
//     }
// }
// document.writeln("There are "+no+" occurence(s) of word 'the'");

// let number = prompt("Enter a positive number");
// let check = Math.sign(number);
// if(check == 1){
//     document.write("number: "+number);
//     document.write("<br>round off value: "+Math.round(number));
//     document.write("<br>floor value: "+Math.floor(number));
//     document.write("<br>ceil value: "+Math.ceil(number));
// }
// else if(check != 1){
//     alert("Allow Only positive numbers")
// }

// let number = prompt("Enter negative floating point number");
// let check = Math.sign(number);
// if(check == -1){
//     document.write("number: "+number);
//     document.write("<br>round off value: "+Math.round(number));
//     document.write("<br>floor value: "+Math.floor(number));
//     document.write("<br>ceil value: "+Math.ceil(number));
// }
// else if(check != -1){
//     alert("Allow Only negative floating point numbers");
// }

// let number = prompt("Enter a number");
// document.write("The absolute value of "+number+" is "+Math.abs(number));

// document.write("random dice value: "+Math.floor(Math.random() * 6) +1 )

// let random = Math.floor(Math.random() * 2) + 1
// if(random == 1){
//     document.write(random)
//     document.write("random coin value: Tails")
// }
// else if(random != 1){
//     document.write(random)
//     document.write("random coin value: Heads")
// }

// let random = Math.floor(Math.random() * 100) + 1;
// document.write("random number  between 1  and 100: "+random);


let input = prompt("Enter your weight in kilograms");
let lowecase = input.toLowerCase();
let searching = lowecase.search("k");
let split;
if(searching == 2){
    split = lowecase.split("k");
    if(split[1] == 'gs' || split[1] == 'kilograms'){
        document.write("The weight of user is "+split[0]+" kilograms")
    }
    else{
        document.write("Please Enter a valid number")
    }
}
else if(searching != 2){
    document.write("The weight of user is "+input+" kilograms")
}


// let rand_number = Math.floor(Math.random() * 10) + 1;
// let input = prompt("Enter a number between  1 and 10");
// if(rand_number == input){
//     document.write("Congratulations");
// }
// else if(rand_number != input){
//     document.write("Try Again");
// }

