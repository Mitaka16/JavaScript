// Fonction qui renvoie le PGCD des deux nombres envoyés en parametres

function PGCD(number1, number2) {
    let stock1 = [];
    let stock2 = [];
    let resultat = 0;
    
    for(let x = 1; x<number1; x++) {
        resultat = number1 / x
        if(Number.isInteger(resultat)) stock1.push(x)
    }
    
    for(let y = 1; y<number2; y++) {
        resultat = number2 / y
        if(Number.isInteger(resultat)) stock1.push(y)
    }
    
    stock2 = stock1.filter((e, i , a) => a.indexOf(e) !== i)

    // console.log('Diviseurs de', number1, number2, stock1)
    // console.log('Les PGCD de', number1, number2, stock2)
    console.log('Le PGCD de', number1,'et', number2, 'est', Math.max(...stock2))
}

PGCD(42, 63)
PGCD(520, 145)
PGCD(86, 26)