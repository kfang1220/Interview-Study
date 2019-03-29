/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

/*
input: string
output: array of all anagrams

*/

 function allAnagrams(string) {
     let str = "";
     let output = []
 
    function findAnagrams(current, str) {
        if(str.length === 0) {
            output.push(current)
        }

        for(let i = 0; i < str.length; i++) {
            findAnagrams(current + str[i], str.slice(0, i) + str.slice(i + 1))
        }
    }

    findAnagrams('', string)
    console.log(output)
  };

  allAnagrams('abc')