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
const sumOfLeftLeaves = (root) => {
    let sum = 0;

    const traverse = (root, leaf = "") => {
        if (!root) {
            return;
        }

        if (!root.left && !root.right && leaf == "left") {
            sum += root.val;
            return;
        }

        traverse(root.left, "left");
        traverse(root.right, "right");
    };

    traverse(root);

    return sum;
};
