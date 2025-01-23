const operate = require('./script');

test('adds 1 + 2 to equal 3', () => {
  expect(operate(1, 2, '+')).toBe(3);
});

// describe('add', () => {
//   test('adds 0 and 0', () => {
//     expect(operate(1, 2, '+')).toBe(3);
//   });

//   // test('adds 2 and 2', () => {
//   //   expect(calculator.add(2, 2)).toBe(4);
//   // });

//   // test('adds positive numbers', () => {
//   //   expect(calculator.add(2, 6)).toBe(8);
//   // });
// });