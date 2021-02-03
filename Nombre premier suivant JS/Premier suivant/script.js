// Fonction qui renvoie le nombre premier suivant
// NE FONCTIONNE PAS

function nombrePremier2(number) {
  let i = 2;
  let result;

  for(i; result != 0; i++) {
    result = number % i;
    if(result != 0) console.log('Ce numero est premier', number)
    else number++
  
  }

}

nombrePremier2(8)