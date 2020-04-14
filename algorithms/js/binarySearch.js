function binarySearch(arr, target) {
  if (arr.length == 0) {
    return false;
  }

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid + 1);

  if (arr[mid] > target) {
    return binarySearch(left, target);
  } else if (arr[mid] < target) {
    return binarySearch(right, target);
  } else {
    return true;
  }
}

console.log(binarySearch([5, 10, 12, 15, 20, 30, 70], 12)); // => true
console.log(binarySearch([5, 10, 12, 15, 20, 30, 70], 24)); // => false
