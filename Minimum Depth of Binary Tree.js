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
const minDepth = (root) => {
    if (!root) {
        return 0;
    }

    let leftDepth = minDepth(root.left);
    let rightDepth = minDepth(root.right);

    if (leftDepth == 0 || rightDepth == 0) {
        return 1 + Math.max(leftDepth, rightDepth);
    }

    return 1 + Math.min(leftDepth, rightDepth);
};
