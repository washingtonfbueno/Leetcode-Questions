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
 * @return {number}
 */
const getMinimumDifference = (root) => {
    let min = Infinity;
    let prev = -Infinity;

    const traverse = (node) => {
        if (!node) {
            return;
        }

        traverse(node.left);
        min = Math.min(min, node.val - prev);
        prev = node.val;
        traverse(node.right);
    };

    traverse(root);

    return min;
};
