function getIndex(arr, number) {
  let sorted = arr.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    if (i === 0 && number < sorted[i]) return 0;
    if (number > sorted[i] && number < sorted[i + 1]) return i + 1;
    if (i === sorted.length - 1) return i;
  }
  return -1;
}

console.log(getIndex([10, 5, 1, 3], 2) === 1);
[1, 3, 5, 10];
