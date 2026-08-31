/*
Write a for loop that:
 1. Creates an array of the first 10 even numbers (2, 4, 6, 8, ...)
 2. Then calculates the sum of those numbers in a second loop
 3. Finally, prints the array and the sum
*/

const evenNums = []
for (let i = 1; i <= 10; i++) {
  evenNums.push(i * 2)
}

let sum = 0
for (const evenNum of evenNums) {
  sum += evenNum
}

console.log(`First 10 even numbers: ${evenNums}, their sum: ${sum}`)
