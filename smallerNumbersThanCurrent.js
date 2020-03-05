/*
Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it.
That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
Explanation: 
For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
For nums[1]=1 does not exist any smaller number than it.
For nums[2]=2 there exist one smaller number than it (1). 
For nums[3]=2 there exist one smaller number than it (1). 
For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
*/

/*
Initial, brute force
const smallerNumbersThanCurrent = (numsArray) => {
    let output = [];
    for(let i = 0; i < numsArray.length; i++) {
        let count = 0;
        for(let j = 0; j < numsArray.length; j++) {
            if(numsArray[j] < numsArray[i]) {
                count++;
            }
        }
        output.push(count)
    }
    return output;
}
*/

/*
Improved

const smallerNumbersThanCurrent = (nums) => {
    let hash = {}
    //cppy original orray to maintain correct output
    nums.slice().sort((a, b) => a - b).forEach((n, i) => {
        if(!hash[n]) hash[n] = i;
    });
    return nums.map(num => num = hash[num]);
};

*/