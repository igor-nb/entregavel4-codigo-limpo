const contagem = require("../Algoritmos/Contagem")

test('A contagem de 1 a 10 deve ser correta', () => {
    expect(contagem(1, 10)).toBe(10);
})

test('A contagem de 5 a 25 deve ser correta', () => {
    expect(contagem(5, 25)).toBe(21);
})