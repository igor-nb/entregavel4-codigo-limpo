const ordenacao = require("../Algoritmos/Ordenacao")

test('O array ordenado de [1, 2, 3, 4, 5] deve ser correto', () => {
    expect(ordenacao([4, 3, 5, 1, 2])).toMatchObject([1, 2, 3, 4, 5]);
})

test('O array ordenado de [1, 2, 3, 4, 5] deve ser correto', () => {
    expect(ordenacao([7, 6, 4, 5])).toMatchObject([4, 5, 6, 7]);
})