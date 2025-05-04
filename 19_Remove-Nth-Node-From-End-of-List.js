/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummyHead = { next: head };
    let slow = dummyHead;
    let fast = dummyHead;
    
    // Move fast n nodes ahead of slow
    for (let i = 1; i <= n; i++) {
        fast = fast.next;        
    }

    // Until fast reaches the end, increment fast and slow up by 1 node
    while(fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    // Once fast reaches the end, point slow to the next->next node
    // In essence we're ignoring the n'th node thereby deleting it
    slow.next = slow.next.next;

    return dummyHead.next;
};