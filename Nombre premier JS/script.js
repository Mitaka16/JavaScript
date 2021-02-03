// Fonction qui renvoie true si le nombre est premier
// Renvoie false s'il ne l'est pas

function nombrePremier(number) {
        let result = false;
        let i = 2;
        
        if(number === 2) result = true;
        else if(number%i == 0) {
          result = false
      }
      else {
        result = true
      }
    
      console.log(result)
      }

      nombrePremier(5)