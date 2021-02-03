// Fonction qui renvoie une lettre de l'alphabet sur deux en majuscule

let phrase = "abcdefghijklmnopqrstuvxwyz";
    let alpha = phrase.toUpperCase();

    function alphabet(str) {
        let alphabetFinal = ''
  let i = 0;
  let j = 1;

  while (i < alpha.length && j < phrase.length) {
      alphabetFinal = alphabetFinal + alpha[i] + phrase[j]
    // console.log("majuscule ", alpha[i]);
    // console.log("minuscule ", phrase[j]);
    i += 2;
    j += 2;
  }
    console.log(alphabetFinal)  

}

alphabet(phrase);
















