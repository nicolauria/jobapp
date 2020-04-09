/*
Given an unsorted array of numbers and another number, you are required to find the index at which the number would be placed if it were to be inserted in a sorted version of the array of numbers.
*/

function getIndex(arr, number) {}

console.log(getIndex([10, 5, 1, 3], 2) === 1);
console.log(getIndex([16, 4, 5], 13) === 1);

/*
const getIndex = (arr, number) =>
    arr.reduce((counter, curr) => (number > curr ? ++counter : counter), 0);
*/

/*
function getIndex(arr, number) {
  let sorted = arr.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    if (i === 0 && number < sorted[i]) return 0;
    if (number > sorted[i] && number < sorted[i + 1]) return i + 1;
    if (i === sorted.length - 1) return i;
  }
  return -1;
}
*/
