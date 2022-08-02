//set 1
// 1. Accept name from user and print a message “Hello <<User>>” on the console.
let name = prompt("Enter Your Name: ")
console.log("Hello", name)

// 2. Accept a number from user and find if it is even or odd. Print message on console accordingly.

let num = prompt("Enter any Number : ")
if (num % 2 == 0) {
  console.log("Even Number ")
} else {
  console.log("Odd Number")
}

// 3. Accept a number from user. Find if the number is a prime number or not. Print message on  console accordingly.
let number = prompt("please enter a number")
if (number == 1) {
  console.log(`${number} is neither prime nor composite number`)
} else if (number < 1) {
  console.log(`${number}is not a prime number`)
} else {
  for (var i = 2; i < number; i++) {
    if (number % i == 0) {
      console.log(`${number} is a not Prime number`)
      break;
    } else {
      console.log(`${number} is a  Prime number`)
    }
  }
}

// 4. Accept a number from user and print its table (Maths table) on the console.
let number1 = prompt("Enter a table")
for (i = 1; i <= 10; i++) {
  console.log(i + "X" + number1 + "=" + i * number1)
}




