let arr = [7, 4, 9, 2, 8, 3, 5, 1, 6, 0];

for (i = 0; i < arr.length; i++) {
  for (x = 0; x < arr.length; x++) {
    if (arr[x] > arr[x + 1]) {
      // swap the elements
      temp = arr[x];
      arr[x] = arr[x + 1];
      arr[x + 1] = temp;
    }
  }
}
console.log(arr); // equal>> [1,2,3,4,5,6,7,8,9]

// Worst Case Time Complexity [ Big-O ]: O(n2)
// Best Case Time Complexity [Big-omega]: O(n)
// Average Time Complexity [Big-theta]: O(n2)
// Space Complexity: O(1)
