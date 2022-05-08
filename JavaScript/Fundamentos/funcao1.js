// Funcao sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma("teste"," teste" )
imprimirSoma(2)

// Funcao com retorno

function soma(a, b = 1) {
    return a + b
}

console.log(soma(2,3))
console.log(soma(2))