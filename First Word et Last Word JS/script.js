// Fonction pour avoir le premier mot de la phrase

phrase = "   Lotfi nous demande d'avoir juste le premier mot      ";
      // console.log(phrase)

      function firstWord(str) {
        let mot = "";
        let i = 0;

        while (str[i] == " ") {
        //   console.log(str[i]);
          i++;
        }

        while (str[i] !== " ") {
          // console.log(str[i]);
          mot = mot += str[i];
          i++;
        }

        console.log("Le premier mot est: ", mot);
      }

      firstWord(phrase);

// Fonction pour avoir le dernier mot de la phrase

      function lastWord(newStr) {
        let mot = '';
        let j = 0;
        let fin = phrase.length-1;

        while ( j < fin) {
            // console.log(newStr[j])
            j++
        }

        while ( newStr[j] == ' ') {
            // console.log(newStr[j])
            j--
        }

        while ( newStr[j] !== ' ') {
            // console.log(newStr[j])
            j--
        }      
        j++
        
        while ( newStr[j] !== ' ') {
            mot = mot + newStr[j]
            j++
        }
        console.log('Le dernier mot est: ', mot)
    }

      lastWord(phrase)