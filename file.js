// A JavaScript program that accepts two numbers in two prompts and displays the larger one in the console

// taking input using prompt in int
let num1 = +prompt('Enter first number:');
let num2 = +prompt('Enter second number:');

// comparing both num
if (num1 > num2) {
    console.log("The larger number is: " + num1);
  } else {
    console.log("The larger number is: " + num2);
  }


// a JavaScript conditional statement to find the sign of a number. Display an alert box with the specified sign.

// taking input using prompt in int
let num = +prompt("Enter a number:");

// Checking the sign of number using if else
if (num > 0) {
  alert("The sign of " + num + " is +");
} else if (num < 0) {
  alert("The sign of " + num + " is -");
} else {
  alert("The number is 0");
}


// JavaScript program that accepts five numbers in five prompts and displays the larger one in the console

// taking input using prompt in int
let num1 = +prompt('Enter first number:');
let num2 = +prompt('Enter second number:');
let num3 = +prompt('Enter third number:');
let num4 = +prompt('Enter fourth number:');
let num5 = +prompt('Enter fifth number:');

// display larger num
if (num1 >= num2 && num1 >= num3 && num1 >= num4 && num1 >= num5) {
    console.log("The largest number is: " + num1);
  } else if (num2 >= num1 && num2 >= num3 && num2 >= num4 && num2 >= num5) {
    console.log("The largest number is: " + num2);
  } else if (num3 >= num1 && num3 >= num2 && num3 >= num4 && num3 >= num5) {
    console.log("The largest number is: " + num3);
  } else if (num4 >= num1 && num4 >= num2 && num4 >= num3 && num4 >= num5) {
    console.log("The largest number is: " + num4);
  } else {
    console.log("The largest number is: " + num5);
  }


// for loop from 0 to 15 to check if the current number is odd or even, and display a message

// for loop to iterate from 0 to 15
for (let i = 0; i <= 15; i++) {

    // Check if the current number is odd or even
        if (i % 2 === 0) {
          console.log(i + " is even");
        } else {
          console.log(i + " is odd");
        }
      }
      
      
// average marks of students then determine the corresponding grades

// enter your marks
let english = +prompt('Enter your English marks:');
let math = +prompt('Enter your Math marks:');
let urdu = +prompt('Enter your Urdu marks:');
let computer = +prompt('Enter your Computer marks:');
let physics = +prompt('Enter your Physics marks:');

// declaring avg and grade
let grade;
let avg = english + math + urdu + computer + physics;

// grading using if else
if (avg < 60) {
    grade = "F";
  } else if (avg < 70) {
    grade = "D";
  } else if (avg < 80) {
    grade = "C";
  } else if (avg < 90) {
    grade = "B";
  } else if (avg < 100) {
    grade = "A";
  }

// output
console.log("The average marks is: " + avg);
console.log("The corresponding grade is: " + grade);


// iterates the integers from 1 to 100. for multiples of three print "Fizz", for multiples of five print "Buzz".
// numbers which are multiples of both three and five print "FizzBuzz".

// loop to iterate from 1 to 100
for (let i = 1; i <= 100; i++) {

    // for multiple of both 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
      }

    // for multiple of 3
    else if (i % 3 === 0) {
        console.log("Fizz");
      }

    // for multiple of 5
    else if (i % 5 === 0) {
        console.log("Buzz");
      }

    else {
      console.log(i);
    }
}



 