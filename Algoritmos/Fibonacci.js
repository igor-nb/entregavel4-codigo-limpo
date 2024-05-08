function fibonacci(N) {
    let primeiroTermo = 0; let segundoTermo = 1; let aux; 
    let sequencia = ""

    for (let i = 1; i <= N; i++) {
        sequencia += primeiroTermo

        if (i != N) {
            sequencia += ", "
        }

        aux = primeiroTermo + segundoTermo
        primeiroTermo = segundoTermo
        segundoTermo = aux
    }
    return sequencia
}

module.exports = fibonacci;