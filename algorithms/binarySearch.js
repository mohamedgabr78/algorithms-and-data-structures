// binary search
// if we have an array of numbers
// searching will take n of times
// The worst case complexity is O(log n)

function binarySearch(arr, item) {
  halflen = Math.floor(arr.length / 2);
  let mid = arr[halflen];

  if (mid === item) return true;
  if (mid > item) return binarySearch(arr.slice(0, halflen), item);
  if (mid < item) return binarySearch(arr.slice(halflen), item);
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7));
