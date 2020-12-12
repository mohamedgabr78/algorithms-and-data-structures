function merge(arr) {
  arr = arr.map((el) => [el]);
  let sortedArr = [];
  while (sortedArr.length != 1) {
    sortedArr = [];
    for (let i = 0; i < arr.length; i += 2) {
      sortedArr.push(arrange(arr[i], arr[i + 2]));
    }
    arr = sortedArr;
  }
  return arr[0];
}
function arrange(arr1, arr2) {
  let arrangeArr = [];
  while ((arr1.length, arr2.length)) {
    if (arr1[0] > arr2[0]) {
      arrangeArr.push(arr2.shift());
    } else {
      arrangeArr.push(arr1.shift());
    }
  }
  if (arr1.length > 0) arrangeArr.push(...arr1);
  if (arr2.length > 0) arrangeArr.push(...arr2);
  return arrangeArr;
}
merge([50, 40, 90, 70, 80, 30]);
