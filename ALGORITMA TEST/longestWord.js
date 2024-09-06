function longestWord(sentence) {
    // Split the sentence into words
    const words = sentence.split(' ');
  
    // Find the longest word
    let longest = words[0];
  
    for (let i = 1; i < words.length; i++) {
      if (words[i].length > longest.length) {
        longest = words[i];
      }
    }
  
    // Return the longest word and its length
    return `${longest}: ${longest.length} characters`;
  }
  
  const sentence = "Saya sangat senang mengerjakan soal algoritma";
  console.log(longestWord(sentence));