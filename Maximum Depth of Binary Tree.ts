/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxDepth(root: TreeNode | null): number {
    let path = 0;
    const traverse = (curr, node) => {
        if (!node) {
            return;
        }

        if (curr > path) {
            path = curr;
        }

        traverse(curr + 1, node.right);
        traverse(curr + 1, node.left);
    };

    traverse(1, root);
    return path;
}
