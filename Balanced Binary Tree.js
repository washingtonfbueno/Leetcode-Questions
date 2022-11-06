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
 * @return {boolean}
 */

const isBalanced = (root) => {
    const maxHeight = (node) => {
        if (!node) {
            return 0;
        }
        return 1 + Math.max(maxHeight(node.left), maxHeight(node.right));
    };

    const traverse = (node) => {
        if (!node) {
            return true;
        }

        return (
            Math.abs(maxHeight(node.left) - maxHeight(node.right)) < 2 &&
            traverse(node.left) &&
            traverse(node.right)
        );
    };

    return traverse(root);
};
