/*
Given an integer n, return any array containing n unique integers such that they add up to 0.
Input: n = 5
Output: [-7,-1,1,3,4]
Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].

/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let output = []
    for (let i = 1; i <= Math.floor(n/2); i++) {
        output.push(-i)
        output.push(i)
    }
    if(n%2 === 1) {
        output.push(0)
    }
    // for (let i = 1; i <=  Math.floor(n/2); i++) {
    //     output.push(i)
    // }
    return output;
};