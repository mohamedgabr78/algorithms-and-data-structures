function quick(arr) {
  let len = arr.length;
  let pivot = arr.pop();
  let right = [],
    left = [];
  for (i = 0; i < len - 1; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quick(left), pivot, ...quick(right)];
}
