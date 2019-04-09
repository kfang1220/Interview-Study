/*
input: integer that represents # of characters per line, and array of strings
output: an array that is joined by newline to make many strings
edge/constriants: none

*/

const wrapLines = (lineLength, arr) => {
    let output = [];
    let currentString = "";

    for(let i = 0; i < arr.length; i++) {
        let currentWord = arr[i];

        if(currentString.length === 0) {
            currentString += currentWord
        } else if(currentString.length + currentWord.length <= lineLength - 1) {
            currentString += ' ' + arr[i];
            if(currentString.length === lineLength) {
                output.push(currentString)
                currentString = '';
            }
        } else {
            output.push(currentString);
            currentString = currentWord;
        } 
    }
    output.push(currentString)  
    console.log(output.join('\n'))
}


console.log(wrapLines(13, [ 'abc', 'xyz', 'foobar', 'cuckoo', 'seven', 'hello' ]));
console.log(wrapLines(8, [ 'It', 'was', 'the', 'best', 'of', 'times', 'it', 'was', 'the', 'worst', 'of', 'times' ]));
console.log(wrapLines(11, [ 'abc', 'xyz', 'foobar', 'cuckoo', 'seven', 'hello' ]));