// Lista de números primos

numero = 20
let i = 2
let NumPrimo = true

 if (numero % i == 0) 
        NumPrimo = false
        
if (NumPrimo) 
    console.log(`Sim, o número ${numero} é primo.`)
else
    console.log(`Não, o número ${numero} não é primo.`)
