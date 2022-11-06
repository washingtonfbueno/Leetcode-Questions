/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

const sortedArrayToBST = (nums) => {
    const binarySearch = (left, right) => {
        const midPoint = Math.floor((left + right) / 2);

        if (right < left) {
            return null;
        }

        const node = new TreeNode(nums[midPoint]);

        node.left = binarySearch(left, midPoint - 1);
        node.right = binarySearch(midPoint + 1, right);
        return node;
    };

    return binarySearch(0, nums.length - 1);
};
