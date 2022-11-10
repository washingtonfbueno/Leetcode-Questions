/**
 * @param {number[]} height
 * @return {number}
 */

const trap = (height) => {
    let left = 0;
    let right = height.length - 1;
    let sum = 0;

    let maxLeft = height.at(0);
    let maxRight = height.at(-1);

    while (left <= right) {
        if (maxLeft < maxRight) {
            let diff = maxLeft - height[left];
            sum += diff < 0 ? 0 : diff;
            maxLeft = Math.max(height[left], maxLeft);
            left++;
        } else {
            let diff = maxRight - height[right];
            sum += diff < 0 ? 0 : diff;
            maxRight = Math.max(height[right], maxRight);
            right--;
        }
    }

    return sum;
};
