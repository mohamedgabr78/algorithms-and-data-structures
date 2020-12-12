// sum number
function sumall(arr) {
  let min, max;
  if (arr[0] < arr[1]) {
    min = arr[0];
    max = arr[1];
  } else {
    min = arr[1];
    max = arr[0];
  }
  let sum = 0;
  for (let i = min; i <= max; i++) {
    //or we could use Math like this for(let i=Math.min(...arr);i<=Math.max(...arr);i++)
    sum += i;
  }
  return sum;
}

console.log(sumall([1, 4]));

//the diffrence in array
function diffarr(arr1, arr2) {
  let diff = [];
  let sumarr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!sumarr.includes(arr1[i])) {
      sumarr.push(arr1[i]);
    }
  }
  for (let i = 0; i < arr1.length; i++) {
    if (!sumarr.includes(arr2[i])) {
      sumarr.push(arr2[i]);
    }
  }

  for (let i = 0; i < sumarr.length; i++) {
    if (!arr1.includes(sumarr[i])) {
      diff.push(sumarr[i]);
    }
  }
  for (let i = 0; i < sumarr.length; i++) {
    if (!arr2.includes(sumarr[i])) {
      diff.push(sumarr[i]);
    }
  }
  return diff;
}
diffarr([1, 2, 4, 6], [1, 2, 7]);
//
//
//another example
//if age more than 50 and the rate more than 7 return senior else return open
function find(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i][0] >= 50 && arr[i][1] > 7) {
      console.log("senior");
    }
  }
}
find([
  [20, 10],
  [25, 12],
  [52, 15],
  [30, 20],
  [60, 5],
]);
//time complexity is O(n)
//or we could use map
const findSenior = (arr) =>
  arr.map(([age, rate]) => (age > 50 && rate > 7 ? "senior" : "open"));
