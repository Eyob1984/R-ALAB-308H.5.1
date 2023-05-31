// 1.Define a function, as a function declaration, `maxOfTwoNumbers` that takes two numbers as argumetns and retruns the largest of them. If they are the same, return that number.

function maxOfTwoNumbers (num1, num2) {
  if(num1 > num2) return num1;
  if(num2 > num1) return num2;

  return `${num1} = ${num2}`
}

console.log(maxOfTwoNumbers(6,6))

// 2. Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

const  maxOfThree = function (n1, n2, n3) {
  if(n1 > n2 && n1 > n3) return n1;
  if(n2 > n1 && n2 > n3) return n2;

  return n3

}

console.log(maxOfThree(10,5,31))

// 3. Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.

function isCharAVowel (char) {
const vowels = ['a', 'e', 'i', 'o', 'u'];
return vowels.includes(char) ? `${char} is a vowel` : `${char} is NOT a vowel`

}
console.log(isCharAVowel('o'))

// 4. Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]); would return 11.
const sumArray = function(arr) {
let sum = 0;
arr.forEach(element => {
  sum = sum + element;
});
return sum;
}
console.log(sumArray([1,5,6,2,3]))

// 5. Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product of those numbers. For example, multiplyArray([2, 4, 5]); would return 40.

const multiplyArray = function(arr) {
let product = 1;
arr.forEach(element => {
  product = product * element;
});
return product
}
console.log(multiplyArray([2,4,5]))

// 6.Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.

// 7.Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar'); would return the string "ratskcor".

function reverseString (str) {
let j = 1
 let end = str.length - j
 let reversedString = ''
while (j < str.length + 1) { 
  reversedString += str[end]
  end--
  j++
}
return JSON.stringify(reversedString);
}
console.log(reverseString('pockstar'))

// 8. Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.

const longestStringInArray = function(array) {
  let max = 0;
  for (x in array) {
   if(max < array[x].length){
    max = array[x].length
   }
  }
  return `the longest string in the array is ${max}`;
}

console.log(longestStringInArray(['long', 'longest', 'short']))

// 9. Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

function stringsLongerThan (array, num) {
  let newArray = []
  for(let x in array) {
    if(array[x].length > num){
      newArray.push(array[x])
    }
  }
return newArray
}
console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3))

//10. Define a function, as a function expression, addList that accepts any quantity of numbers as arguments, adds them together, and returns the resulting sum. Assume all parameters will be numbers. If called with no arguments, return 0 (zero).

const addList = function(array) {
  let sum = 0;
  if (array.length === 0) return 0;
  arr.forEach(element => {
    sum = sum + element;
  });
  return sum;

}
console.log(addList([]))