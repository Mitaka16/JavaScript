// Fonction Factorielle en recursivité

function factorielle(number) {
    if( number <= 0) return 1;
    else return number * factorielle(number-1) 
} console.log('La factorielle vaut', factorielle(6))

