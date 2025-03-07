function matrixGeneartion(n) {
  let matrix = [];
  let count = 1;
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push(count++);
    }
    matrix.push(row);
  }
  return matrix;
}
function spiralMatrix(n) {
  const matrix = matrixGeneartion(n);
  let top = 0,
    bottom = matrix.length - 1,
    left = 0,
    right = matrix[0].length - 1;
  let result = [];
  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[left][i]);
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;
    for (let i = right; i >= left; i--) {
      result.push(matrix[bottom][i]);
    }
    bottom--;
    for (let i = bottom; i >= top; i--) {
      result.push(matrix[i][left]);
    }
    left++;
    return result;
  }
}
console.log(spiralMatrix(3));
