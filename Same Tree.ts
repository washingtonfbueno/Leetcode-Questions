function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
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
}
