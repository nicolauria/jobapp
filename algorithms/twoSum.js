/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

function twoSum(arr, target) {}

// Test
console.log(
  JSON.stringify(twoSum([2, 7, 11, 15], 9)) == "[0,1]" ||
    JSON.stringify(twoSum([2, 7, 11, 15], 9)) == "[1,0]"
);

// Solutions
// this first solution has a quadratic runtime (n^2)

/*
function twoSum(arr, target) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
}
*/

// this second solution has a linear runtime (n)

/*
function twoSum(arr, target) {
  compliment = {};
  for (let i = 0; i < arr.length; i++) {
    const test = compliment[arr[i]];
    if (test !== undefined) return [test, i];
    compliment[target - arr[i]] = i;
  }
}
*/
