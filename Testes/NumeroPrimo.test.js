const numeroPrimo = require("../Algoritmos/NumeroPrimo")

test('O número 11 deve ser primo', () => {
    expect(numeroPrimo(11)).toBe(true);
})

test('O número 12 deve não ser primo', () => {
    expect(numeroPrimo(12)).toBe(false);
})