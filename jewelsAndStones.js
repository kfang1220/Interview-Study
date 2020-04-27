/*
You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example: 
Input: J = "aA", S = "aAAbbbb"
Output: 3

Input: J = "z", S = "ZZ"
Output: 0
*/

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const createCharHash = (str) => {
    let map = {}
    for(let i = 0; i < str.length; i++) {
        if(map[str[i]] === undefined) {
            map[str[i]] = 1;
        } else {
            map[str[i]]++;
        }
    }
    return map;
}


const numJewelsInStones = (J, S) => {
    let jewels = createCharHash(J);
    let stones = createCharHash(S);
    let output = 0;
    
    for (let key in stones) {
        if (jewels.hasOwnProperty(key)) {
            output += stones[key];
        }
    }
    
    return output;
};

// const numJewelsInStones = (j, s) => {
//     return s.split('').filter((c)=> {
//         if (j.includes(c)) {
//             return c;
//         }
//     }).join('').length
// }