console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'

function helloName(name) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log('Should say "Hello, Jake!"', helloName('Jake')); // DONE

// 3. Function to add two numbers together & return the result

function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

console.log('Should return the number 7', addNumbers(5, 2)); // DONE

// 4. Function to multiply three numbers & return the result

function multiplyThree(firstNumber, secondNumber, thirdNumber) {
  return firstNumber * secondNumber * thirdNumber;
}

console.log('Should return the number 500', multiplyThree(5, 10, 10)); // DONE

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise

function isPositive(number) {
  if (number > 0) {
    return true;
  }
  return false;
}

// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log('isPositive - should say true', isPositive(3));
console.log('isPositive - should say false', isPositive(0));
console.log('isPositive - should say false', isPositive(-3));
console.log('isPositive - should say true', isPositive(45)); // DONE

// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
let foodArray = ['apples', 'pears', 'oranges', 'pizza'];

function getLast(array) {
  return array[array.length - 1];
}

// THIS WAS MY ORIGINAL getLast() FUNCTION. MATT HELPED ME SIMPLIFY IT INTO THE FUNCTION ABOVE.
// function getLast(array) {
//   if (array[array.length - 1]) {
//     return array.slice(-1)[0];
//   } else {
//     return undefined;
//   }
// }

console.log('This should return the string "pizza"', getLast(foodArray)); // DONE

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find

function find(value, array) {
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return true;
    }
  }
  return false;
}
// THIS WAS MY ORIGINAL FUNCTION, BUT MATT HELPED ME SIMPLIFY IT ABOVE.
// function find(value, array) {
//   let check = false;
//   for (let i = 0; i < array.length; i++) {
//     if (value === array[i]) {
//       return check = true;
//     }
//   }
//   return check;
// }

console.log('find() should be true', find('oranges', foodArray)); // DONE

// THE FOLLOWING FUNCTION WAS A TEST OF THE SAME LOGIC USING A "FOR OF" LOOP INSTEAD. SPECIAL THANKS TO JACK LUND WITH THE ASSIST!

// function find(value, array) {
//   let check = false;
//   for (index of array) {
//     if (index === value) {
//       check = true;
//       if (check === true) {
//         break;
//       }
//     }
//   }
//   return check;
// }

// console.log(find('pizza', foodArray));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise

function isFirstLetter(letter, string) {
  let check = false;
  for (let i = 0; i < string.length; i++) {
    if (letter === string[0]) {
      check = true;
    }
  }
  return check;
}

console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));
console.log('isFirstLetter - should say true', isFirstLetter('z', 'zebra'));
console.log('isFirstLetter - should say false', isFirstLetter('c', 'kangaroo')); // DONE

// 9. Function to return the sum of all numbers in an array
let numberArray = [1, 539, 29, 2, 148];

function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

console.log(
  'The sum of all the numbers in the array should be 719',
  sumAll(numberArray)
); // DONE

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

let inputArray = [-7, -43, 0, 8, 983, -21, 94];

function getPositivesInNewArray(array) {
  let newArray;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      newArray = array.filter((num) => num > 0);
    }
  }
  return newArray;
}

console.log(
  'the positive numbers put into the new array are ',
  getPositivesInNewArray(inputArray)
); // DONE

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

// This function attempts to multiply two variables together.

// Original function:
// function multiply(a, b) {
//   a * b;
// }

let a = 2;
let b = 100;

function multiply(a, b) {
  return a * b;
}

console.log(multiply(a, b));
// The function was missing a return a * b statement within its scope. If there is no return statement, 'undefined' is logged onto the console.
// DONE
