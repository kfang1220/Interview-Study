/**
 * Given a set of distinct integers, nums,
 return all possible subsets(the power set).

 Note: The solution set must not contain duplicate subsets.

 Example:
 Input: nums = [1, 2, 3]
 Output: [
     [3],
     [1],
     [2],
     [1, 2, 3],
     [1, 3],
     [2, 3],
     [1, 2],
     []
 ]
 */

 var subsets = function (nums) {
     return getAllSubsets(nums);
 }

 const getAllSubsets = theArray => {
     //go through each value [1,2,3]
     return theArray.reduce((subsets, value, i) => {
         /*
         for each value, make new arrays looping through previous values to form unique array combintiations
         [] old
         1 => [] old , [1] new
         2 => [] [1] old, [2] [2,1]
         3 => [] [1] [2] [2,1] old  [3] [3,1] [3,2], [3,2,1] new
         */
         return subsets.concat(subsets.map(set => {
             return [value, ...set]
         }))
     }, [
         []
     ]);
 }
