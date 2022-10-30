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
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = (root, targetSum) => {
    const traverse = (node, sum) => {
        if (!node) {
            return false;
        }

        sum += node.val;

        if (!node.left && !node.right) {
            return sum == targetSum;
        }

        return traverse(node.left, sum) || traverse(node.right, sum);
    };

    return traverse(root, 0);
};
