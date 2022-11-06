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

const isSymmetric = (root) => {
    const traverse = (leftNode, rightNode) => {
        if (leftNode && rightNode) {
            return (
                leftNode.val == rightNode.val &&
                traverse(leftNode.left, rightNode.right) &&
                traverse(leftNode.right, rightNode.left)
            );
        } else if (!leftNode && !rightNode) {
            return true;
        }
        return false;
    };

    return traverse(root.left, root.right);
};
