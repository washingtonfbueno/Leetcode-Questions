/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = (n) => {
    return [...Array(n)].map((_, index) => {
        index++;
        return !(index % 15)
            ? "FizzBuzz"
            : !(index % 3)
            ? "Fizz"
            : !(index % 5)
            ? "Buzz"
            : index.toString();
    });
};
