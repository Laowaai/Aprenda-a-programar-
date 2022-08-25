let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};

console.log (produtoA.nome)
if   (produtoA.internacional == true) {
    let valorimpostos = produtoA.valor * 1.2 
    console.log ("O produto e internacional e o valor do imposto e", valorimpostos)
}
    else {
        let valorimpostos = produtoA.valor * 1.12
        console.log ("O produto e nacional e o valor do imposto e", valorimpostos)
            }
console.log (produtoB.nome)
if   (produtoB.internacional == true) {
     let valorimpostos = produtoB.valor * 1.2 
     console.log ("O produto e internacional e o valor do imposto e", valorimpostos)
            }
    else {
    let valorimpostos = produtoB.valor * 1.12
    console.log ("O produto e nacional e o valor do imposto e", valorimpostos)
                        }
console.log (produtoC.nome)
if   (produtoC.internacional == true) {
     let valorimpostos = produtoC.valor * 1.2 
     console.log ("O produto e internacional e o valor do imposto e", valorimpostos)
                        }
    else {
     let valorimpostos = produtoC.valor * 1.12
     console.log ("O produto e nacional e o valor do imposto e", valorimpostos)
                                    }