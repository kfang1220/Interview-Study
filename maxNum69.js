
/*
Given a positive integer num consisting only of digits 6 and 9.

Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let strNum = num.toString().split('');
    
    for(let i = 0; i < strNum.length; i++) {
        strNum[i] = '9';
        let modifiedNum = Number(strNum.join(''))
        if(modifiedNum > Number(num)) return modifiedNum
    }
    
    return num;
};