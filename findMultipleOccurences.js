/*
Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const nonDups = new Set();
    const output = new Set();
    for (let value of nums) {
          if (nonDups.has(value)) {
            output.add(value);
            nonDups.delete(value);
          } else {
            nonDups.add(value);
          }
      }
      return Array.from(output)
      
  //     let occurenceMap = nums.reduce((map, value) => {
  //         map[value] ? map[value]++ : map[value] = 1
  //         return map;
  //     }, {})
  
  //     return Object.keys(occurenceMap).filter(keys => occurenceMap[keys] > 1)
  }