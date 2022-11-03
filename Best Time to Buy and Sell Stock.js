/**
 * @param {number[]} prices
 * @return {number}
 */

const maxProfit = (prices) => {
    let maxProfit = 0;
    let [left, right] = [0, 1];

    while (right < prices.length) {
        if (prices[right] > prices[left]) {
            maxProfit = Math.max(maxProfit, prices[right] - prices[left]);
        } else {
            left = right;
        }

        right++;
    }

    return maxProfit;
};
