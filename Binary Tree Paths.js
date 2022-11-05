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
 * @return {string[]}
 */
const binaryTreePaths = (root) => {
    let paths = [];

    const traverse = (node, path = []) => {
        if (!node) {
            return;
        }

        path = [...path, node.val];

        traverse(node.right, path);
        traverse(node.left, path);

        if (!node.left && !node.right) {
            paths.push(path.join("->"));
            return;
        }
    };

    traverse(root);

    return paths;
};
