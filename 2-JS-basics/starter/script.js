/***************************
  Variables and data types
***************************/

/*
var firstName = 'Lester';
console.log(firstName);

var lastName = 'Lane';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable Name Rules
var $3years = 3;
var johnMark = "John and Mark";
var if = 23;
*/


/***************************
  Variable mutation and type coercion
***************************/

/*
var firstName = 'Lester';
var age = 28;

//Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?')
console.log(firstName + ' ' + lastName);
*/


/***************************
  Basic Operators
***************************/
/*
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
year = 2018;
yearJohn = year - ageJohn;
yearMark = year - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

//Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

//typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/


/***************************
Operator precedence
***************************/

/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;

// Multiple assignments
var x, y;
x = (3 + 5) * 4 - 6;
console.log(x)

console.log(x, y);

// More operators
x += 2;
console.log(x)
x += 10;
console.log(x)
x++;
console.log(x)
*/

/***************************
Coding Challenge 1
***************************/
/*

var markMass = 71;
var johnMass = 81;

var markHeight = 1.557;
var johnHeight = 1.707;

var markBMI = markMass / (markHeight + markHeight); 
var johnBMI = johnMass / (johnHeight + johnHeight);

var markHigherBMI = markBMI > johnBMI;
console.log('Is Mark\'s BMI higher than John\'s', markHigherBMI);

// if (mark > john) {
//   console.log("Wrong");
// } else {
//  console.log("thought you knew");
// }

*/

/***************************
If / else statements
***************************/

// var firstName = 'John';
// var civilStatus = 'single';

// if (civilStatus === 'married') {
//   console.log(firstName + ' is married!');
// } else {
//   console.log(firstName + ' will hopefully marry soon :)');
// }

// var isMarried = true;
// if (isMarried) {
//   console.log(firstName + ' is married');
// } else {
//   console.log(firstName + ' will hopefully marry soon :)')
// }

/***************************
Boolean logic
***************************/

var firstName = 'John';
var age = 16;

if (age < 13) {
  console.log(firstName + ' is a boy.');
} else if ( age >= 13 && age < 20) {
  console.log(firstName + ' is a teenager.');
} else {
  console.log(firstName + ' is a man.');
}








