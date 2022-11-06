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

const maxDepth = (root) => {
    const traverse = (node, height = 0) => {
        if (!node) {
            return height;
        }

        return Math.max(
            height,
            traverse(node.left, height + 1),
            traverse(node.right, height + 1)
        );
    };
    return traverse(root);
};
