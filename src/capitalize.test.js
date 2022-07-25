const capitalize = require('./capitalize');

test ('Capitalize first letter of a word', () => {
  expect(capitalize("thiago")).toMatch("Thiago");
});

test ('Capitalize letter', () => {
  expect(capitalize("f")).toMatch("F");
});

test ('Capitalize first letter of a phrase', () =>{
  expect(capitalize("mate you are good!")).toMatch("Mate you are good!")
})