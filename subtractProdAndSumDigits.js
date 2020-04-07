/*
Given an integer number n, return the difference between the product of its digits and the sum of its digits.

Input: n = 234
Output: 15 
Explanation: 
Product of digits = 2 * 3 * 4 = 24 
Sum of digits = 2 + 3 + 4 = 9 
Result = 24 - 9 = 15

Input: n = 4421
Output: 21
Explanation: 
Product of digits = 4 * 4 * 2 * 1 = 32 
Sum of digits = 4 + 4 + 2 + 1 = 11 
Result = 32 - 11 = 21
*/

/**
 * @param {number} n
 * @return {number}
 */

var subtractProductAndSum = function(n) {
    //     n = n.toString().split('')
    //     let prod = 1, sum = 0;
    //     n.forEach(p => {
    //         prod *= Number(p);
    //         sum += Number(p);
    //     })
    //     return prod - sum;
        
        let prod = 1, sum = 0;
        
        while(n > 0) {
            let val = n % 10;
            prod *= val;
            sum += val;
            n = Math.floor(n/10);
        }
        return prod - sum;
    };