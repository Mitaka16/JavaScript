// Écrire une fonction itérative qui renvoie une puissance d’un nombre. Une puissance inferieur à 0 renverra 0

function puissance(number, puissance) {
  let result = 1;

  for (let x = 0; x < puissance; x++) {
    result *= number;
  }

  alert(number + " puissance de " + puissance + " vaut " + result);
}
puissance(5, 4);
puissance(19, 5);

// Avoir une fonction qui recoit 2 parametres ( 1 nombre envoyé, 2 sa puissance)
// avoir une boucle qui se repete autant de fois que la puissance donné
// et qui calcule le nombre envoye * nombre envoyé en recuperant le resultat

// exemple: la puissance donné est 4 et le nombre envoyé est 5
// la boucle fera 4 fois le calcul 5 * 5
