function inorderTraversal(root: TreeNode | null): number[] {
    const arr = [];

    const inorder = (root) => {
        if (!root) {
            return;
        }

        inorder(root.left);

        arr.push(root.val);
        inorder(root.right);
    };

    return arr;
}
