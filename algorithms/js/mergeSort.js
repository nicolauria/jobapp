function mergeSort(unsortedArray) {
  // No need to sort the array if the array only has one element or empty
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }
  // In order to divide the array in half, we need to figure out the middle
  const middle = Math.floor(unsortedArray.length / 2);

  // This is where we will be dividing the array into left and right
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  // Using recursion to combine the left and right
  return merge(mergeSort(left), mergeSort(right));
}

// Merge the two arrays: left and right
function merge(left, right) {
  let resultArray = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] > right[0]) {
      resultArray.push(right.shift());
    } else {
      resultArray.push(left.shift());
    }
  }

  return resultArray.concat(left).concat(right);
}

console.log(mergeSort([10, -1, 2, 5, 0, 6, 4, -5]));
