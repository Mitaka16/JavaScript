// Instructions en bas de la page

function test() {
    const array = [{
        age: 32,
        prenom: "padawan",
        date: '22/09/1968',
        sexe: "M"
    }, {
        age: 33,
        prenom: "Kenza",
        date: '22/09/1978',
        sexe: "F"
    }, {
        age: 34,
        prenom: "alan",
        date: '22/09/1995',
        sexe: "M"
    }, {
        age: 77,
        prenom: "reda",
        date: '22/10/1968',
        sexe: "M"
    }, {
        age: 45,
        prenom: "Kenza",
        date: '22/09/1965',
        sexe: "F"
    }, {
        age: 44,
        prenom: "alan",
        date: '22/09/1999',
        sexe: "M"
    }, {
        age: 32,
        prenom: "wan",
        date: '22/09/1968',
        sexe: "F"
    }, {
        age: 70,
        prenom: "za",
        date: '22/09/1978',
        sexe: "F"
    }, {
        age: 80,
        prenom: "alan",
        date: '22/09/1995',
        sexe: "M"
    }, {
        age: 32,
        prenom: "pada",
        date: '22/09/1999',
        sexe: "M"
    }, {
        test: [{
            id: '0102',
            name: 'toto',
            adresse: null
        }, {
            id: '0103',
            name: 'toto',
            adresse: null
        }, {
            id: '0104',
            name: 'toto',
            adresse: null
        }, {
            id: '01025',
            name: 'toto',
            adresse: null
        }, {
            loop: true,
            name: 'tptt',
            boucle: [{
                age: 10,
                prenom: "roky",
                sexe: "M",
                baby: false,
            }, {
                age: 3,
                prenom: "roky",
                sexe: "M",
                baby: false
            }, {
                age: 2,
                prenom: "roky",
                sexe: "M",
                baby: false
            }, ]
        }]
    }, {
        age: 17,
        prenom: "lenzo",
        date: '22/09/1955',
        sexe: "F"
    }, {
        age: 34,
        prenom: "roky",
        date: '22/09/1999',
        sexe: "M"
    }, ]

    // console.log("array global", array) // AFFICHE LE TABLEAU
    array.map(el => {
        // console.log(el) // AFFICHE CHAQUE ELEMENT DU TABLEAU
        if (el.test != undefined) {
            // console.log(el.test) // AFFICHE LE TABLEAU TEST
            el.test.map(item => {
                if (item.loop === true) {
                    // console.log(item) //AFFICHE LE TABLEAU LOOP
                    item.boucle.map(age => {
                        // console.log(age) // AFFICHE LES ELEMENTS DU TABLEAU BOUCLE
                        if (age.age < 5) {
                            console.log(age)
                        }
                    })
                }
            })
        }
    })

}

// faire une boucle sur le 1er tab ensuite rentrer ds test
// si loop est egale a true rentrer dans boucle 
// faire une boucle sur "boucle"
// sortire les enfants dont l'age est inferieur a 5an