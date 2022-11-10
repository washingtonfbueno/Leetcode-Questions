/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
const maxDepth = (root) => {
    if (!root) {
        return 0;
    }

    if (!root.children.length) {
        return 1;
    }

    let children = root.children.map((node) => maxDepth(node));

    return 1 + Math.max(...children);
};
