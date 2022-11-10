/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
    let numOne = "";
    let numTwo = "";

    while (l1) {
        numOne = l1.val + numOne;
        l1 = l1.next;
    }

    while (l2) {
        numTwo = l2.val + numTwo;
        l2 = l2.next;
    }

    let sum = (BigInt(numOne) + BigInt(numTwo)).toString();

    let node = new ListNode(parseInt(sum[0]));

    for (let number of sum.slice(1)) {
        let newNode = new ListNode(parseInt(number));
        newNode.next = node;
        node = newNode;
    }

    return node;
};
