// in this function it will take n of time to finish this loops
// and time complixty will be O(n)
function sum(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

sum([1, 3, 10]);

// but in this function n will euql 1 even if we change the array
//so it will finish in one line and the time complixty will be O(1)
function sum(arr) {
  return arr.reduce((sum, num) => sum + num);
}
sum([1, 3, 10]);

//another example

function sumall(num) {
  let sum = 0;
  for (i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
sumall(5);
//time complixty will be O(n)
