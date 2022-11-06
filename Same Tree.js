/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

const isSameTree = (p, q) => {
    const traverse = (first, second) => {
        if (!first && !second) {
            return true;
        } else if (first && second && first.val == second.val) {
            return (
                traverse(first.left, second.left) &&
                traverse(first.right, second.right)
            );
        }
        return false;
    };

    return traverse(p, q);
};
