/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

const hasCycle = (head) => {
    let nodeRecord = new Set();

    traverse = (node) => {
        if (!node) {
            return false;
        }

        if (nodeRecord.has(node)) {
            return true;
        }

        nodeRecord.add(node);

        return false || traverse(node.next);
    };

    return traverse(head);
};
