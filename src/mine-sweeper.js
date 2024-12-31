const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = Array.from({length: matrix.length}) ;

  result = result.map(()=> Array( matrix[0].length).fill(0));

  for (let row = 0; row < result.length; row++) {
    for (let col = 0; col < result[0].length ; col++) {
        result[row][col] += foundMines(matrix, row, col);
    }
  }

  return result;
}

function foundMines(arr, row, col) {
    let founded = 0;
    const checkAreas = [
        [row - 1, col],
        [row - 1, col + 1],
        [row, col + 1],
        [row + 1, col + 1],
        [row + 1, col],
        [row + 1, col - 1],
        [row, col - 1],
        [row - 1, col - 1]
    ]

    for (const [i,j] of checkAreas) {
        try {
            if( arr[i][j] === true){
                founded++;
            }
        } catch (e){
        }
    }
    return founded;
}

module.exports = {
  minesweeper
};
