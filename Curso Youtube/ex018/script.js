

function contar() {

    let res = document.getElementById('res')
let inicio = document.getElementById('inicio')
let fim = document.getElementById('fim')
let passo = document.getElementById('passo')

let teste = inicio - fim

res.innerHTML = `${teste.value}`

}