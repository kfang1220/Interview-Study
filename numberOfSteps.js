// Given a non-negative integer num, return the number of steps to reduce it to zero. 
// If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

const numberOfSteps = (num, steps = 0) => {
    
    // trivial
    // let steps = 0;
    // while(num > 0) {
    //     if (num % 2 !== 0) {
    //         num--;
    //     } else {
    //         num /= 2;
    //     }
    //     steps++;
    // }
    // return steps;
    
    if (num === 0) return steps
    
    if (num % 2 === 0) {
        return numberOfSteps(num/2, steps+= 1)
    } else {
        return numberOfSteps(num - 1, steps+= 1)
    }
}