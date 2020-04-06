// Default sort() in javaScript uses insertion sort by V8 Engine of Chrome and Merge Sort by Mozilla Firefox and Safari. This is not suitable if you need to sort large number of elements. Solution is to use Quick sort for large dataset.

// Quick sort follows divide and conquer algorithm.

// Steps:
// 1) First select an element which is to be called as pivot element.
// 2) Next, compare all array elements with the selected pivot element and arrange them in such a way that, elements less than the pivot element are to it's left and greater than pivot is to it's right.
// 3) Finally, perform the same operations on left and right side elements to the pivot element.

// Quick sort runs with Time Complexity of O(n logn)

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  var left = [];
  var right = [];
  var newArray = [];
  var pivot = array.pop();

  for (var i = 0; i < array.length; i++) {
    if (array[i] <= pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return newArray.concat(quickSort(left), pivot, quickSort(right));
}
