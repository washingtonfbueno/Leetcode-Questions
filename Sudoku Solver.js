/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solveSudoku = (board) => {
    const isValidPosition = (x, y, number) => {
        for (let column of board[y]) {
            if (column == number) {
                return false;
            }
        }

        for (let row of board) {
            if (row[x] == number) {
                return false;
            }
        }

        let squareFirstXPos = Math.floor(x / 3) * 3;
        let squareFirstYPos = Math.floor(y / 3) * 3;

        for (let row = squareFirstYPos; row < squareFirstYPos + 3; row++) {
            for (
                let column = squareFirstXPos;
                column < squareFirstXPos + 3;
                column++
            ) {
                if (board[row][column] == number) {
                    return false;
                }
            }
        }

        return true;
    };

    let lastEmptyPos = [0, 0];

    for (let y = 8; y > 0; y--) {
        if (lastEmptyPos[0] || lastEmptyPos[1]) {
            break;
        }
        for (let x = 8; x > 0; x--) {
            if (board[y][x] == ".") {
                lastEmptyPos = [x, y];
                break;
            }
        }
    }

    const solve = () => {
        for (let y = 0; y < 9; y++) {
            for (let x = 0; x < 9; x++) {
                if (board[y][x] == ".") {
                    for (let number = 1; number < 10; number++) {
                        if (isValidPosition(x, y, number)) {
                            board[y][x] = number;

                            solve();
                            if (
                                board[lastEmptyPos[1]][lastEmptyPos[0]] != "."
                            ) {
                                return;
                            }
                            board[y][x] = ".";
                        }
                    }
                    return;
                }
            }
        }
    };

    solve();
};
