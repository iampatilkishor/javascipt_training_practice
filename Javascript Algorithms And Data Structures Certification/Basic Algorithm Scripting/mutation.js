// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

function mutation(arr) {
  var allFound = false
  var arr0 = arr[0].toLowerCase();
  var arr1 = arr[1].toLowerCase();
    for(let i=0;i<arr1.length;i++){
      if(arr0.includes(arr1[i]))
        allFound = true
      else{
        allFound = false
        break;
      }
    }
  return allFound;
}

// test cases
// mutation(["hello", "hey"])                         // should return false.
// mutation(["hello", "Hello"])                       // should return true.
// mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])                       // should return true.
// mutation(["Mary", "Army"])                       // should return true.
// mutation(["Mary", "Aarmy"])                       // should return true.
// mutation(["Alien", "line"])                       // should return true.
// mutation(["floor", "for"])                       // should return true.
// mutation(["hello", "neo"])                       // should return false.
// mutation(["voodoo", "no"])                       // should return false.