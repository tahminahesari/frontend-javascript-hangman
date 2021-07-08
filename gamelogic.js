function displayWordSoFar(word, guesses) {
  let string = "";
  const array = word.split("");
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    if (guesses.includes(array[i])) {
      string += array[i] + " ";
    } else string += "_ ";
  }
  console.log(string);
  return string

  // * Hoe kan ik iedere letter afzonderlijk bekijken
  // * HOe kan ik automaitsch over alle letters van het woord luisteren
  // * Zit deze letter in de guesses aaray, zo ja print letter zelf
  // * anders underscore

  }

function isGameWon(word, guesses) {
  // WRITE ME
}

function isGameLost(word, guesses) {
  // WRITE ME
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};
