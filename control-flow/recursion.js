// Write a recursive function that finds the max of an arbitrarily nested list of numbers
const data = [1, [2, 3], [4, [5, 6]], 7];

const data2 = [1, [2, [3, [12, 18], 4], 5], 6, 7, 8];
function findMax(nestedArray) {
  let max = -Infinity;
  for (const item of nestedArray) {
    if (Array.isArray(item)) {
      max = Math.max(max, findMax(item));
    } else {
      max = Math.max(max, item);
    }
  }
  return max;
}

console.log(findMax(data));
console.log(findMax(data2));
