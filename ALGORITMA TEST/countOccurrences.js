function countOccurrences(inputArray, queryArray) {
    return queryArray.map(query => {
      // Count occurrences of each query word in the input array
      return inputArray.filter(input => input === query).length;
    });
  }
  
  const INPUT = ['xc', 'dz', 'bbb', 'dz'];
  const QUERY = ['bbb', 'ac', 'dz'];
  
  console.log(countOccurrences(INPUT, QUERY))