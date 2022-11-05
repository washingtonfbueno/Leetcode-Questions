/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = (head) => {
    let [node, tail, prev, next] = [head, null, null, null];

    while (node) {
        tail = new ListNode(node.val);
        tail.next = prev;
        prev = tail;
        node = node.next;
    }

    while (tail && head) {
        if (head.val != tail.val) {
            return false;
        }

        head = head.next;
        tail = tail.next;
    }

    return true;
};
