function contagem(inicio, fim) {
    let contador = 0;

    for (let i = inicio; i <= fim; i++) {
        contador++;
    }
    return contador;
}

module.exports = contagem;