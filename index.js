let a='hello';
let  b=`murali`;
var str="        my         name is murali           "
console.log(a.length);
//return the length of the string
//ouput:5
console.log(a.concat(b));
//returns the concatination of two strings(`${a} ${b}`)
//ouput:hellomurali
console.log(a.endsWith('o'));
//returns boolean if the string ends with the given character
//ouput:true
console.log(a.includes('e'));
//returns boolean if the string contains the given character
//ouput:true
console.log(str.indexOf('murali'));
//returns the index of the given character/string
//ouput:11
console.log(str.lastIndexOf('murali'));
//returns the lastindex of the given character/string
//ouput:11
console.log(a.repeat(2));
//repeats the string for the number of times in given input
//ouput:hellohello
console.log(a.replace('e','o'));
//replaces the character in the string with the given character
//ouput:hollo
console.log(a.search('h'));
//returns 0 or 1  if the given element is found
//ouput:0
console.log(a.slice(-5));
//slices the given string from start to end
//ouput:ello
console.log(a.startsWith('h'));
//returns boolean if the string starts with the given character
//ouput:true
console.log(a.substr(1,4));
//returns a substring from the given string from start to len
console.log(a.substring(0));
//returns a substring from the given string from start to end
//ouput:ello
console.log(a.toUpperCase());
//converts the string into UpperCase
//ouput:HELLO
console.log(a.toLowerCase());
//converts the string into lowerCase
//ouput:hello
console.log(str.trim());
//trims the string from extra spaces
//ouput:my name is murali
console.log(a.split("l"));
//splits the string and converts them into objects
//output:["he", "", "o"]
// 0: "he"
// 1: ""
// 2: "o"


//-------------------------------------------------

//Number methods//


var x=5.8765;
var y=10.3283273;


var a3=x.toFixed()
console.log(a3);
//converts the given value into a fixed integer value
//output:5
var a2=y.toExponential();
console.log(a2);
//converts the given value in Exponential format
//output:5.2653e+0
var a1=x.toString();
console.log(a1);
//converts the given number into a string(binary,octal,decimal,hexadecimal)

//-----------------------------------------------------
//Global methods

var m1='210';
var m4=2.33444;
var m3=210;


console.error(m3);
//displays the error message we are passing as input
//output:210(error message)

console.warn("please ignore");
//displays an warning message
//output:please ignore

console.table(["Audi", "Volvo", "Ford"]);
//	Displays tabular data as a table
//output:Array(3)0: "Audi"1: "Volvo"2: "Ford"length: 3__proto__: Array(0)

console.info('Murali')
//prints the value in console window
//output:murali

//console.log(alert("Hii ignore this message"));
//displays an alert box with a specified message and an OK button.
//output:Hii ignore this message(alert box)

//console.log(prompt("Name","murali"));
//prompt the given window and outputs the given value
//output:murali(alert box with input box)

//console.log(confirm("press a button"));
//Interrupts the window and asks to press a key
//output :alert box with ok key

console.log(Number(m1));
//converts the object to a number that represents the object's value
//output:210(number)

console.log(isNaN(m1));
//return boolean based on whether the input is number or not
//output:false

var m5=parseFloat(m1)
console.log(m5);
//converts the given string into float
//output:210(float)

var m2=parseInt(m1);
console.log(m1);
console.log(m2);
//it parses the given string and converts it into an integer
//210(integer)

var m6=String(m3);
console.log(m6);
//converts the given object into strings
//output:210(string)

console.log(Boolean(m3==m1));
//compares whether the two data sets are boolean or not(both == and === can be used)
//output:true


//---------------------------------------
//variables and functions