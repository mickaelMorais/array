let objeto = []
function add() {
    let input = document.querySelector('.input')
    let valor = document.querySelector('.input').value

    if (valor == '') {
        alert('informe um valor válido!')
    } else if (objeto.indexOf(valor) !== -1) {
        alert('objeto já adicionado')
    } else{
        objeto.push(valor)
        console.log(objeto)
        input.value = ""
    }
}
function ord() {
    console.log(objeto.sort())
}