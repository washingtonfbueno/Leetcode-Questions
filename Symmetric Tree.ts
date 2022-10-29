function isSymmetric(root: TreeNode | null): boolean {
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
}
