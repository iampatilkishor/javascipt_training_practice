// Intermediate Algorithm Scripting: Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

// The lowest number will not always come first.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function sumAll(arr) {
    return arr[0] < arr[1] ? addAll(arr[0], arr[1]) : addAll(arr[1], arr[0])
  }
  
  var addAll = (min,max) => {
  let sum = 0;
  for(let i=min;i<=max;i++)
      sum+=i;
  return sum;
  }
  
  sumAll([1, 4]);


// sumAll([1, 4])                                     //  should return a number.
// sumAll([1, 4])                                     //  should return 10.
// sumAll([4, 1])                                     //  should return 10.
// sumAll([5, 10])                                     //  should return 45.
// sumAll([10, 5])                                     //  should return 45.