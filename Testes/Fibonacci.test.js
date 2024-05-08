const fibonacci = require("../Algoritmos/Fibonacci")

test('Os 10 primeiros números da contagem de fibonacci devem ser corretos', () => {
    expect(fibonacci(10)).toBe("0, 1, 1, 2, 3, 5, 8, 13, 21, 34");
})

test('Os 2 primeiros números da contagem de fibonacci devem ser corretos', () => {
    expect(fibonacci(2)).toBe("0, 1");
})