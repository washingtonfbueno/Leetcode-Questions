/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
const mergeTrees = (root1, root2) => {
    if (!root1 && !root2) {
        return null;
    }

    const merged = new TreeNode((root1?.val || 0) + (root2?.val || 0));

    merged.left = mergeTrees(root1?.left || 0, root2?.left || 0);
    merged.right = mergeTrees(root1?.right || 0, root2?.right || 0);

    return merged;
};
