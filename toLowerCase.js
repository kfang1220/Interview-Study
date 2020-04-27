/*
Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

#Example
Input: "LOVELY"
Output: "lovely"
*/

/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    let output = '';
    
    str.split('').forEach(char => {
        let asci = char.charCodeAt(0);
        
        //from A - Z
        if(asci > 64 && asci < 91) asci += 32;
        
        output += String.fromCharCode(asci)
    })
    
    return output;
};