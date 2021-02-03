// Fonction qui renvoie la racine carré du nombre envoyé

function racine(number) {
            let x = 1;
            let result = 0;
            for(x; x < number; x++)
             if(x * x === number) result = x
             
             console.log("La racine carré est ", result)
        }
        racine(9)
        racine(18)