// Fonction qui renvoie le resultat factorielle du nombre choisi

// Methode 1: factorielle --

function factorielle(number) {
    let stock = 1;
    let x = number;

    if (x <= 0) stock = 0

    for(x; x > 0; x--) {
        stock *= x
        // console.log('Factorielle --', x)
    }
    console.log("Le factorielle -- du nombre choisi est", stock)
}
factorielle(5)

// Methode 2: factorielle ++

function factoriellePlus(number) {

    let x = 1
    let stock = 1

    for(x; x <= number; x++) {
        stock *= x
        // console.log('Factorielle ++',x)
    }
    console.log('Le factorielle ++ du nombre choisi est', stock)
}

factoriellePlus(5)