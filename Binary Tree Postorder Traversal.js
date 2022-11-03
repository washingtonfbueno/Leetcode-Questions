/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const preorderTraversal = (root) => {
    let arr = [];
    traverse = (node) => {
        if (!node) {
            return;
        }

        arr.push(node.val);
        traverse(node.left);
        traverse(node.right);
    };
    traverse(root);
    return arr;
};
