function somar() {
    //Pegar o valor digitado na caixa de texto primeiroValor
    let num1 = parseFloat(document.getElementById('primeiroValor').value);
    //Pegar o valor digitado na caixa de texto SegundoValor
    let num2 = parseFloat(document.getElementById('SegundoValor').value);
    //Adiciona conteúdo na tag p com id resultado
    document.getElementById('resultado').innerHTML = 'Resultado: ' + (num1 + num2);
}
function subtrair() {
    //Pegar o valor digitado na caixa de texto primeiroValor
    let num1 = parseFloat(document.getElementById('primeiroValor').value);
    //Pegar o valor digitado na caixa de texto SegundoValor
    let num2 = parseFloat(document.getElementById('SegundoValor').value);
    //Adiciona conteúdo na tag p com id resultado
    document.getElementById('resultado').innerHTML = 'Resultado: ' + (num1 - num2);
}
function multiplicar() {
    //Pegar o valor digitado na caixa de texto primeiroValor
    let num1 = parseFloat(document.getElementById('primeiroValor').value);
    //Pegar o valor digitado na caixa de texto SegundoValor
    let num2 = parseFloat(document.getElementById('SegundoValor').value);
    //Adiciona conteúdo na tag p com id resultado
    document.getElementById('resultado').innerHTML = 'Resultado: ' + (num1 * num2);
}
function dividir() {
    //Pegar o valor digitado na caixa de texto primeiroValor
    let num1 = parseFloat(document.getElementById('primeiroValor').value);
    //Pegar o valor digitado na caixa de texto SegundoValor
    let num2 = parseFloat(document.getElementById('SegundoValor').value);
    if (num2 != 0) {
        //Adiciona conteúdo na tag p com id resultado
        document.getElementById('resultado').innerHTML = 'Resultado: ' + (num1 / num2);
    }else{
        document.getElementById('resultado').innerHTML = 'Erro: Não pode ser divisível por zero';
    }

}