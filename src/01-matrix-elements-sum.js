/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const result = [];
  for (let k = 0; k < matrix[0].length; k++) {
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][k] !== 0) {
        result.push(matrix[i][k]);
      } else break;
    }
  }
  return result.reduce((sum, current) => sum + current, 0);
}

module.exports = getMatrixElementsSum;
