function titleCase(str) {
    var wordsArray = str.split(" ");
    for (i = 0; i < wordsArray.length; i++){
        var lettersArray = wordsArray[i].split("");
        lettersArray[0] = lettersArray[0].toUpperCase();
        for (j = 1; j < lettersArray.length; j++){
            lettersArray[j] = lettersArray[j].toLowerCase();
        }
        wordsArray[i] = lettersArray.join("");
    }
  return wordsArray.join(" ");
}

titleCase("I'm a little tea pot");