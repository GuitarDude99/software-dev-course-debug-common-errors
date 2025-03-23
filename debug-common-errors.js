/*

Overview
In this activity, you will receive three short JavaScript programs,
each containing a different type of error (syntax, runtime, and logic)
along with a brief explanation of what the program is supposed to do.
Your task is to identify the error, correct it, and verify the fix.

Instructions
Debugging Steps:
  - Identify the error type (syntax, runtime, or logic).
  - Use Debugging Techniques such as reading error messages, using console.log(), or testing in small steps.
  - Propose a Fix that addresses the error.
  - Verify the Solution by running the code again to ensure the program works as intended.

Reflection:
Think about which debugging methods you found most useful and how you might apply them in future projects.

*/

// Programs and Solutions


///ANSWERS

// Program A
// Description:
// This program is intended to display a simple prompt in the console but fails to run.

// Error: Missing closing quote and parenthesis in the console.log() statement
// Fix: Add the missing quote and closing parenthesis

console.log("Welcome to the bootcamp");

// Verified: The message now displays in the console without any syntax issues



// Program B
// Description:
// This code attempts to multiply each number in an array by 2 and display the results. However, it crashes at runtime.

// Error: The array contains a string ("eight") which can't be multiplied by a number
// Fix: Add a type check before performing multiplication

let numbers = [2, 4, "eight"];

for (let i = 0; i < numbers.length; i++) {
  let current = numbers[i];

  if (typeof current === "number") {
    let doubled = current * 2;
    console.log(doubled);
  } else {
    console.log("Skipping invalid value: " + current);
  }
}

// Verified: The program no longer crashes and correctly handles non-numeric values



// Program C
// Description:
// This snippet of code is supposed to check if a given number is prime (i.e., divisible only by 1 and itself). However, it incorrectly marks some numbers as prime or not prime.

// Error: The logic is reversed. It returns true when the number is divisible, which means it's not prime
// Fix: Return false when divisible, and true only if no divisors are found

function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(7));  // Expected: true
console.log(isPrime(4));  // Expected: false
console.log(isPrime(2));  // Expected: true

// Verified: The function now correctly identifies prime numbers
