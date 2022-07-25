const calculator = require('./calculator');

test ('sum', () => {
    expect(calculator.sum(1,2)).toBe(3);

})
test ('subtract', () => {
    expect(calculator.subtract(1,2)).toBe(-1);
})
test ('divide', () => {
    expect(calculator.divide(1,2)).toBe(1/2);
})
test ('multiply', () => {
    expect(calculator.multiply(1,2)).toBe(2);
})

test ('divide negatives', () => {
    expect(calculator.divide(-1,-2)).toBe(1/2);})
    