//------Part1: Basics-----------------------
/* ------------------Q1-------------------- */
/*
Write a function called add9
that takes one number as a parameter 
and returns that number + 9.
*/

function add9(number) {
  return (number += 9);
}
console.log(add9(10));
/* ------------------Q2-------------------- */
/*
Write a function called multiplyNum
that takes 2 numbers as parameters 
and returns their product.
*/

function multiplyNum(num1, num2) {
  return num1 * num2;
}

/* --------------------Q3------------------ */
/*
Write a function called capitalizeStr
that takes a string as a parameter
and returns that string with _only_ 
the first letter capitalized.
Make sure that it can take strings that are lowercase,
UPPERCASE or BoTh.
*/

function capitalizeStr(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
console.log(capitalizeStr("FundAMENTAL"));
/* ---------------------Q4:----------------- */
/*
Write a function called lastLetter
that takes a string 
and returns the last letter of that string.
lastLetter("abcd") ➞  "d"
*/

function lastLetter(str) {
  return str[str.length - 1];
}

console.log(lastLetter("abcd"));
/* --------------------Q5-------------------- */
/*
Write a function called average 
that takes 3 numbers 
and returns their average.
*/

function average(a, b, c) {
  return (a, b, c) / 3;
}

/* --------------------Q6-------------------- */
/*
Write a function called greaterNum
that takes 2 numbers as parameters
and returns the greater one.
*/

function greaterNum(x, y) {
  return x > y ? x : y;
}
//------Part2: Intermediate----------------------------
/* --------------------Q7-------------------- */
/*
Write a function called  minutesToSeconds that takes 
a number represent the (minutes) as a parameter and 
returns it in seconds.
 minutesToSeconds(5) ➞ 300
*/

function minutesToSeconds(min) {
  return min * 60;
}
console.log(minutesToSeconds(5));
/* --------------------Q8-------------------- */
/*
Write a function called incrementByOne
that takes a number as a parameter, 
increments the number by +1 and returns the result.
incrementByOne (7) ➞ 8

*/
function incrementByOne(z) {
  return ++z;
}
console.log(incrementByOne(7));
/* --------------------Q9-------------------- */
/*
Write a function called basicCalculator
that takes 3 parameters,2 numbers and an operator as an arguments
and returns the result of the corresponding mathematical function on both numbers. 
If the operator is not one of the specified characters +, -, /, *,
or if there is a division by zero, the function should return null.

basicCalculator(2, '+',  4) ➞ 6
basicCalculator (3,'-', 2) ➞ 1
basicCalculator(1, '/', 0) ➞ null
basicCalculator(1, 'x', 0) ➞ null
*/

function basicCalculator(num1, num2, op) {
  if (op === "+") return num1 + num2;
  else if (op === "-") return num1 - num2;
  else if (op === "/") return num1 === 0 || num2 === 0 ? null : num1 / num2;
  else if (op === "*") return num1 * num2;
  else return null;
}
console.log(basicCalculator(5, 5, "i"));
/* --------------------Q10-------------------- */
/*
Write a function called numberOfArguments that 
returns the number of arguments it was called with.

numberOfArguments() ➞ 0
numberOfArguments('hello') ➞ 1
numberOfArguments('hello','World') ➞ 2
*/

function numberOfArguments() {
  return arguments.length;
}
console.log(numberOfArguments("hello", "World"));
/* --------------------Q11-------------------- */
/*
Write a function called reversedNumber that 
takes a number as a parameter 
and returns the number reversed

reversedNumber(14523) ➞ 32541
*/

function reversedNumber(x) {
  return String(x).split("").reverse().join("");
}
console.log(reversedNumber(14523));
/* --------------------Q12-------------------- */
/*
Write a function called perfectNumber that 
takes a number as a parameter 
and returns true if the number is perfect,and 
false if not.

Note:
- visit the resources in README section to know what a perfect number is.

perfectNumber(6) ➞ true
*/
function perfectNumber(n) {
  let output = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      output += 1;
    }
  }
  return output;
}
console.log(perfectNumber(6));
/* --------------------Q13-------------------- */
/*
Write a function called stringSplitting that takes a string
as a parameter,breaks it up and returns it with vowels first,
consonants second. 
For any character that's not a vowel 
(like special characters or spaces), treat them like consonants.

stringArrange("Hello!") ➞ "eoHll!"
*/

/* write your  code here */

//------Part3: Advanced----------------------------
/* --------------------Q14-------------------- */
/*
Write a function called palindrome
that takes a string as a parameter 
and checks whether a passed string is palindrome or not? 

Note:
A palindrome is: a word, phrase, or sequence 
that reads the same backward as forward.
eg : racecar
*/
/* write your  code here */
function palindrome(str) {
  let reverseStr = str.split("").reverse().join("");
  if (str === reverseStr) {
    return "palindrome";
  } else {
    return "not palindrome";
  }
}

console.log(palindrome("racecar"));

/* --------------------Q15-------------------- */
/* 
Write a function called evenishOrOddish that takes a number as 
a parameter and determine whether a number is evenish or oddish.
A number is Oddish if the sum of all of its digits is odd,
and a number is Evenish if the sum of all of its digits is even.
If a number is Oddish, return "Oddish". Otherwise, return "Evenish".
  eg:
evenishOrOddish(43) ➞ "Oddish"
evenishOrOddish(4433) ➞ "Evenish"
*/

function evenishOrOddish(num) {
  return num
    .toString()
    .split("")
    .map(Number)
    .reduce((a, b) => a + b, 0);
}

console.log(evenishOrOddish(222));
/* --------------------Q16-------------------- */
/*
Write a function that takes a string as a parameter 
and returns the first character that repeats. 
If there is no repeat of a character, return "-1".
Note: words are case sensitive.

firstRepeat("legolas") ➞ "l"
firstRepeat("Isin") ➞ "-1"
*/

function firstRepeat(str) {
  let strArr = str.split("").forEach((e, i, arr) => {
    if (e === e) return `${e}`;
    else return "-1";
  });
  return strArr;
}
console.log(firstRepeat("legolas"));

/* --------------------Q17-------------------- */
/*
Write a function that takes one, two or more numbers as 
arguments and adds them together to get a new number. 
The function then repeatedly multiplies the digits of the new number 
by each other, yielding a new number,
until the product is only 1 digit long. Return the final product.
eg:
sumDigitProduct(13,16) ➞ 8
13 + 16 = 29
2 * 9 = 18
1  * 8 = 8
 */

function sumDigitProduct() {
  let arr = Array.from(arguments);
  let sum = arr.reduce((a, b) => a + b);
  return sum
    .toString()
    .split("")
    .map(Number)
    .reduce((a, b) => a * b, 1)
    .toString()
    .split("")
    .map(Number)
    .reduce((a, b) => a * b, 1);
}

console.log(sumDigitProduct(16, 12, 10));
/* --------------------Q18-------------------- */
/*
Do you think you will give this topic five stars rating , let’s see .....
Given an array of five values, calculate the average star rating, 
rounded to two decimal places. 
The array contains user votes per star, so the first element [0] contains the 
number of 1-star ratings and the last element [4], the number of 5-star ratings.

Return the average score in [brackets],
followed by a space and asterisks' * to represent the star rating, 
rounded to the nearest whole star.

Examples:
starRating(c) ➞ "[3.15] ***"

starRating([0, 2, 0, 1, 23]) ➞ "[4.73] *****"

starRating([16, 17, 23, 40, 45]) ➞ "[3.57] ****"

Notes:
Round stars to whole stars.
*/

const starRating = function (stars) {
  let avg = parseFloat(
    (stars[0] + stars[1] * 2 + stars[2] * 3 + stars[3] * 4 + stars[4] * 5) /
      (stars[0] + stars[1] + stars[2] + stars[3] + stars[4])
  ).toFixed(2);
  // return `[${avg}]`;
  if (avg >= 0 && avg <= 0.5) return [avg];
  if (avg > 0.5 && avg <= 1) return `[${avg}] *`;
  if (avg > 1 && avg <= 1.5) return `[${avg}] *`;
  if (avg > 1.5 && avg <= 2) return `[${avg}] **`;
  if (avg > 2 && avg <= 2.5) return `[${avg}] **`;
  if (avg > 2.5 && avg <= 3) return `[${avg}] ***`;
  if (avg > 3 && avg <= 3.5) return `[${avg}] ***`;
  if (avg > 3.5 && avg <= 4) return `[${avg}] ****`;
  if (avg > 4 && avg <= 4.5) return `[${avg}] ****`;
  if (avg > 4.5 && avg <= 5) return `[${avg}] *****`;
};
console.log(starRating([55, 67, 98, 115, 61]));
console.log(starRating([0, 2, 0, 1, 23]));
console.log(starRating([16, 17, 23, 40, 45]));
/*-------------------Good Luck--------------------------*/
