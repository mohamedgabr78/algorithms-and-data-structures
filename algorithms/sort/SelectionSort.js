function selection(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    let minIndex = i;

    for (j = i; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        minIndex = j;
      }
    }

    let temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
  return arr;
}
selection([2, 4, 8, 6, 3, 5, 9, 7]);
