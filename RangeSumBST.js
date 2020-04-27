/*
Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).

The binary search tree is guaranteed to have unique values.

#Example
Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
Output: 32

Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
Output: 23
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    let sum = 0;
    dfs(root);
    return sum;
    
    function dfs (node) {
        if(!node) return;
                console.log(node.val)
        
        if(node.val < L) {
            dfs(node.right);
            return;
        }
        
        if(node.val > R) {
            dfs(node.left);
            return;
        }
        
        sum += node.val;
        
        dfs(node.left);
        dfs(node.right);
    }
}