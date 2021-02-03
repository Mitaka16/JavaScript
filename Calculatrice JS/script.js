// Fonction calculatrice 2

function calcul() {
    let number1 = parseInt(prompt('Entrez votre nombre '));
    console.log("nombre 1 = ", number1);
    let operator = prompt('Quel operateur souhaitez-vous utiliser ?');
    console.log('operateur choisi: ', operator);
    let number2 = parseInt(prompt('Entrez votre nombre '));
    console.log("nombre 2 = ", number2);
    let somme = number1 + number2;
    let sous = number1 - number2;
    let div = number1 / number2;
    let mul = number1 * number2;

    if(operator === '+'){
        alert('La somme de ce calcul vaut: ' + somme)
    } else if(operator === '-') {
        alert('La soustraction de ce calcul vaut: '+ sous)
    } else if(operator === '/') {
        alert('La division de ce calcul vaut: ' + div)
    } else if(operator === '*') {
        alert('La multiplication de ce calcul vaut: ' + mul)
    } else {
        alert('ERREUR')
    }
}