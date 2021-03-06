// linear search
// if we have an array of numbers
// searching will take n of times
// The worst case complexity is O(n), sometimes known an O(n) search.

var arr = [1, 2, 3, 4, 5, 6];
var NofTimes = 0;
var searchNember = 6;
for (i = 0; i < arr.length; i++) NofTimes++;
console.log(NofTimes);
if ((i = searchNember)) console.log("done");
else console.log("not found");

// here NofTimes will equal=6 >> O(6)

//but here we will take more time
var arr = [1, 2, 3, 4, 5, 6];
var NofTimes = 0;
for (i = 0; i < arr.length; i++) NofTimes++;
for (x = 0; x < arr.length; x++) NofTimes++;
console.log(NofTimes);
