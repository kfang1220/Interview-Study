    
/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/
/*
input: array of integers
output: first integer the occurs an even number of times
edgecase: empty array -> null
constraints: timecomplex: worst case is n, 
psuedo: 
loop through
create a hash
check against the hash while we loop
return if exist 
return null at end
*/


var evenOccurrence = function(arr) {
  // Your code here.

  let hash = {};

  for(let i = 0; i < arr.length; i++) {
    if(!hash[arr[i]]) {
        hash[arr[i]] = 1;
    } else {
        hash[arr[i]]++
    }
  }
  for(let i = 0; i < arr.length; i++) {
      if(hash[arr[i]] % 2 === 0) {
        return arr[i]
      }
  }
  return null;
};

// var evenOccurrence = function(arr) {
//     // Your code here.
  
//     var hash = {};
//     var i;
//     // hash of not-even characters
//     for (i = 0; i < arr.length; i++) {
//       hash[arr[i]] = !hash[arr[i]];
//     }

//     console.log(hash)
//     // return the first even occurrence
//     for (i = 0; i < arr.length; i++) {
//       if (!hash[arr[i]]) { return arr[i]; }
//     }
//     return null;
//     };

var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4, 4]);
console.log(onlyEven)