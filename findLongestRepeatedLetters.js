/*
Given a list of strings 
Find the longest consecutive substring containing a single represented letter
*/

const findLongestRepeatedLetters = (arr) => {
    let output = []
    let outputHash = []
    for(let i = 0; i < arr.length; i++) {
        let count = 1;
        let hash = {}
        for(let k = 0; k < arr[i].length; k++) {
            if(!hash[arr[i][k]]) {
                hash[arr[i][k]] = 1;
            }
        }

        for(let j = 0; j < arr[i].length; j++) {
            if(arr[i][j] === arr[i][j+1]) {
                count++
            } else if (count > hash[arr[i][j]]) {
                hash[arr[i][j]] = count;
                count = 1;
            } else {
                count = 1;
            }
        }
        output.push(hash)
    }

    for(let t = 0; t < output.length; t++) {
        let largest = undefined;
        let char = '';
        let op = {}
        for(let temp in output[t]) {
            if(largest === undefined) {
                 largest = output[t][temp]
                 char = temp;
            } else if(output[t][temp] > largest) {
                largest = output[t][temp]
                char = temp;
            } else {
                continue;
            }
        }   
        op[char] = largest;
        outputHash.push(op)
    }



    console.log(outputHash)
}

console.log(findLongestRepeatedLetters([ 'I', 'O', 'U' ]));
console.log(findLongestRepeatedLetters([ 'RIGAMAROLE', 'CONSTRUCTIVE', 'ASSIDUOUSLY' ]));
console.log(findLongestRepeatedLetters([ 'AAABBBBAABBBCCCCCCCDDAAAAAAAAAADEFGCC', 'BBBA', 'RUNDMC', 'DDADDDADDDDA', 'ABBA','ZZTOP', 'MISSISSIPPI' ]));

