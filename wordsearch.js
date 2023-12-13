const transpose = function (matrix) {
    let newMatrix = [];
    for (let i = 0; i < matrix[0].length; i++) {
        newMatrix[i] = [];
        for (let j = 0; j < matrix.length; j++) {
            newMatrix[i][j] = matrix[j][i];
        }
    }
    return newMatrix;
};

const wordSearch = (letters, word) => {
    if (letters.length === 0) {
        return false;ß
    }
    const horizontalJoin = letters.map(ls => ls.join(''))
    const verticleJoin = transpose(letters).map(ls => ls.join(''));
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    for (l of verticleJoin) {
        if (l.includes(word)) return true
    }
    return false
}

module.exports = wordSearch