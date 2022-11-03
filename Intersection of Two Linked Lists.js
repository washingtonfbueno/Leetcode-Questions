/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = (headA, headB) => {
    let hashNode = new Set();

    while (headA) {
        hashNode.add(headA);
        headA = headA.next;
    }

    while (headB) {
        if (hashNode.has(headB)) {
            return headB;
        }
        headB = headB.next;
    }

    return null;
};
