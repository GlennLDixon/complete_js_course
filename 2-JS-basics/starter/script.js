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

// var firstName = 'John';
// var age = 16;

// if (age < 13) {
//   console.log(firstName + ' is a boy.');
// } else if ( age >= 13 && age < 20) {
//   console.log(firstName + ' is a teenager.');
// } else {
//   console.log(firstName + ' is a man.');
// }

/**************************************
SWITCH STATEMENTS AND TERNARY OPERATORS
***************************************/
/*
var firstName = 'John';
var age = 22;

// Ternary operators 
age >= 18 ? console.log(firstName + 'drinks beer')
: console.log(firstName + 'drinks juice.');

var drink = age >= 18 ? "beer" : "juice";

// if (age >= 18) {
//   var drink = 'beer';
// } else {
//   var drink = 'juice';
// }

// Switch statement
var job = 'cop';
switch (job) {
    case 'artist':
        console.log(firstName + ' paints beautiful pictures');
        break;
    case 'machine operator':
        console.log(firstName + ' operates a robot');
        break;
    case 'developer':
        console.log(firstName + ' create unigue websites for businesses');
        break;
    case 'dog catcher':
        console.log(firstName + ' always out of breath');
        break;
        default:
        console.log (firstName + ' Likes to harrass peopl');
      
}

  switch (true) {
    case age < 13:
      console.log(firstName + ' is a boy.');
      break;
    case age >= 13 && age < 18:
      console.log(firstName + ' is a teenager.');
      break;
    case age >= 20 && age < 30:
      console.log(firstName + ' is a young man.');
      break;
    default:
      console.log(firstName + ' is a man.');
  }
*/

/**********************************************
Truthy and Falsy values and equality operators
**********************************************/

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

/*
var height;

height = 23;

if (height || height === 0) {
    console.log('variable is defined');
} else {
  console.log('variable has NOT been defined');
}

// Equality operators
if (height == '23') {
  console.log('The == operator does type coercion');
}
*/

/******************
Coding Challenge 2
******************/
// let markTeam = (101 + 94 + 97) /3;
// let johnTeam = (77 + 83 + 132) / 3;

// markTeam > johnTeam ? console.log('Mark has high point av') :
// markTeam < johnTeam ? console.log('John got the best of you') : console.log('it\'s a tie');

/******************
Functions
******************/

/*
function calculateAge(birthYear) {
    return 2018 - birthYear
}

var ageGlenn = calculateAge(1993);
var ageCalvin = calculateAge(1988);
var ageTobias = calculateAge(1990);
console.log(ageGlenn, ageCalvin, ageTobias)

function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;
  
  if(retirement > 0) {
    console.log(firstName + ' retires in ' + retirement + ' years.');
  } else {
    console.log(firstName + ' is already retired.');
  }
}

yearsUntilRetirement(1993, 'Glenn');
yearsUntilRetirement(1949, 'Calvin');
yearsUntilRetirement(1990, 'Tobias');
*/

/**********************************
Function Statements and Expressions
***********************************/

//Function expression
/*
var whatDoYouDo = function(job, firstName){
  switch(job) {
    case 'teacher':
      return firstName + 'teaches kids how to code';
    case 'driver':
      return firstName + ' drives a uber in Libson';
    case 'designer':
      return firstName + ' does something else';
    default:
      return firstName + ' does something else';
  }
}

console.log(whatDoYouDo('teacher', 'Glenn'));
console.log(whatDoYouDo('driver', 'Tobias'));
console.log(whatDoYouDo('designer', 'Calvin'));
*/

/***********
Arrays
************/

/*
var names = ['Glenn', 'Calvin', 'Tobias'];
var years = new Array(1990, 1969, 1948);

console.log(name[0]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different data types
var glenn = ['Glenn', 'Smith', 1990, 'teacher', false];

glenn.push('blue');
glenn.unshift('Sr.');
console.log(glenn);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1990));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John is a designer';
console.log(isDesigner);
*/


/******************
Coding Challenge 3
*******************/

function tipCalculator(bill){
  var percentage;
  if(bill < 50) {
    percentage = .2;
  } else if (bill >= 50 && bill <= 200) {
    percentage = .15;
  } else {
    percentage = .1;
  }
  return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

var finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2]];
console.log(tips, finalValues);










