/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const deleteDuplicates = (head) => {
    let node = head;

    if (!node) {
        return null;
    }

    while (node.next) {
        if (node.next.val == node.val) {
            node.next = node.next.next;
        } else {
            node = node.next;
        }
    }
    return head;
};
