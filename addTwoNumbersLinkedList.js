/**
 * You are given two non - empty linked lists representing two non - negative integers.The digits are stored in reverse order and each of their nodes contain a single digit.Add the two numbers and
 return it as a linked list.

 You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 Input: (2 - > 4 - > 3) + (5 - > 6 - > 4)
 Output: 7 - > 0 - > 8
 Explanation: 342 + 465 = 807.

 */

 /**
  * Definition for singly-linked list.
  * function ListNode(val) {
  *     this.val = val;
  *     this.next = null;
  * }
  */
 /**
  * @param {ListNode} l1
  * @param {ListNode} l2
  * @return {ListNode}
  */

 function ListNode(val) {
     this.val = val;
     this.next = null;
 }

 var addTwoNumbers = function (l1, l2) {
     let head = new ListNode()
     let curr = head;
     let carry = 0;

     let arr1 = []
     let arr2 = []
     let sumArr = []


     while (l1) {
         arr1.push(l1.val)
         l1 = l1.next
     }

     while (l2) {
         arr2.push(l2.val)
         l2 = l2.next
     }
     // couldnt get arr.fill to work
     if (arr1.length < arr2.length) arr1 = arr1.join('').padEnd(arr2.length, 0).split('').map(x => +x);
     if (arr2.length < arr1.length) arr2 = arr2.join('').padEnd(arr1.length, 0).split('').map(x => +x);

     arr1 = arr1.reverse()
     arr2 = arr2.reverse()

     for (let i = arr1.length - 1; i >= 0; i--) {
         let sum = arr1[i] + arr2[i] + carry
         let initialSum = sum;
         carry = Math.floor(sum / 10)
         if (sum > 9) {
             let leftOver = sum.toString().split('')
             sum = Number(leftOver[1])
         }
         sumArr.push(Math.floor(sum))

         if (carry > 0 && i === 0 && initialSum > 9) {
             let temp = Math.floor(carry)
             sumArr.push(temp)
         }
     }

     for (let i = 0; i < sumArr.length; i++) {
         if (head.val === undefined) {
             head.val = sumArr[i]
         } else {
             let addNode = new ListNode(sumArr[i])
             curr.next = addNode
             curr = curr.next
         }
     }

     return head;
 };