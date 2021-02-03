// Fonction suite de Fibo en recursivité

function Fibo(number) {
    if(number <= 1) return number
    return Fibo(number-1) + Fibo(number-2) 
} console.log('La valeur de cette position dans la suite de Fibonacci vaut',Fibo(15))