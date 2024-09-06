function reverseAlphabets(str) {
    // Separate the alphabet characters and the number
    const letters = str.slice(0, -1).split(''); // "NEGIE" → ["N", "E", "G", "I", "E"]
    const number = str.slice(-1); // "1"
    
    // Reverse the letters and join them back
    const reversedLetters = letters.reverse().join(''); // ["E", "I", "G", "E", "N"] → "EIGEN"
    
    // Return the reversed string with the number at the end
    return reversedLetters + number; // "EIGEN1"
  }
  
  const inputStr = "NEGIE1";
  console.log(reverseAlphabets(inputStr));