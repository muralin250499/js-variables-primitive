let a='hello';
let b=`murali`;
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

