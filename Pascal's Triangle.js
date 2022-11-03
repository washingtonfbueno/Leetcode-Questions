const generate = (numRows) => {
    let rows = [[1]];

    for (let row = 2; row <= numRows; row++) {
        let newRow = [...Array(row)].map((_, index) => {
            let previousRow = [0].concat(rows.at(-1)).concat([0]);
            return previousRow[index] + previousRow[index + 1];
        });
        rows.push(newRow);
    }
    return rows;
};
