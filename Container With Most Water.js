/**
 * @param {number[]} height
 * @return {number}
 */

const maxArea = (height) => {
    let left = 0;
    let right = height.length - 1;
    let area = 0;

    while (right >= left) {
        let minHeight = Math.min(height[left], height[right]);
        area = Math.max(area, (right - left) * minHeight);

        if (height[left] <= height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return area;
};
