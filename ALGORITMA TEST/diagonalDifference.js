function diagonalDifference(matrix) {
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
  
    for (let i = 0; i < matrix.length; i++) {
      primaryDiagonalSum += matrix[i][i]; // Sum of primary diagonal
      secondaryDiagonalSum += matrix[i][matrix.length - 1 - i]; // Sum of secondary diagonal
    }
  
    // Return the absolute difference between the sums
    return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
  }
  
  const matrix = [
    [1, 2, 0],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  console.log(diagonalDifference(matrix));