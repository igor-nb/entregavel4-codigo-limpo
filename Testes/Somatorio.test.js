const somatorio = require("../Algoritmos/Somatorio")

test('O somatório de [1, 2, 3, 4, 5] deve ser correto', () => {
    expect(somatorio([1, 2, 3, 4, 5])).toBe(15);
})

test('O somatório de [4, 5, 6, 7] deve ser correto', () => {
    expect(somatorio([4, 5, 6, 7])).toBe(22);
})