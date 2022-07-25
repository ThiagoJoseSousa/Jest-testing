const Encryption= require('./CaesarCipher');

test ('Caesar Cipher from z to a', () => {
    expect(Encryption.caesar("z", 1)).toMatch("a")
})

test ('Caesar Cipher capitalization', () => {
    expect(Encryption.caesar("eEe", 1)).toMatch("fFf")
})

test ('Caesar Cipher punctuation', () => {
    expect(Encryption.caesar("$", 1)).toMatch("%")
})
test ('Caesar Cipher spaces', () => {
    expect(Encryption.caesar("$ $", 1)).toMatch("% %")
})