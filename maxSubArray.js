/*
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    //output value
    let answer = -Infinity;
    //current running total
    let current_sum = 0;
    
    /*
    Loop through and add values
    each iteration will check if current running total is greater than best
    If the current sum is ever less than 0 its probably not going to be a good starting point
    */
    for(let i = 0; i < nums.length; i++) {
        current_sum += nums[i];
        answer = Math.max(current_sum, answer);
        current_sum = Math.max(current_sum, 0)
    }
    return answer;
};