const mdc = require("../Algoritmos/MDC")

test('O MDC de 30 e 45 deve ser correto', () => {
    expect(mdc(30, 45)).toBe(15);
})

test('O MDC de 12 e 18 deve ser correto', () => {
    expect(mdc(12, 18)).toBe(6);
})