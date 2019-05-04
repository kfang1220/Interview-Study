/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
Example 
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

/**
input: array, target
output: array of both indexes
edgecase/constraint: ordered?
psuedo
loop through and create a hash of value/indexes
loop through hash and check if target - index exists if so return value for both keys
 */
var twoSum = function(nums, target) {
    let hash = {};
    for(let i = 0; i < nums.length; i++) {
        let other = target - nums[i];
        // if(hash[nums[i]] !== undefined && nums[i] * 2 === target) {
        //         return [hash[nums[i]], i];
        // }
        if(hash[other] !== undefined) {
            return [hash[other], i]
        }
        hash[nums[i]] = i;
    }
    
    // for(let keys in hash) {
    //     if(hash[target - keys] && hash[target - keys] !== keys ) {
    //         return [hash[keys], hash[target-keys]];
    //     }
    // }
};

let test = [230,863,916,585,981,404,316,785,88,12,70,435,384,778,887,755,740,337,86,92,325,422,815,650,920,125,277,336,221,847,168,23,677,61,400,136,874,363,394,199,863,997,794,587,124,321,212,957,764,173,314,422,927,783,930,282,306,506,44,926,691,568,68,730,933,737,531,180,414,751,28,546,60,371,493,370,527,387,43,541,13,457,328,227,652,365,430,803,59,858,538,427,583,368,375,173,809,896,370,789]
let target = 542

// let test = [3,3]
// let target = 6;

// let test = [2,7,11,15]
// let target = 9

console.log(twoSum(test, target))