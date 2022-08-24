import validatePhoneNumbers from '../validatePhoneNumbers';

test.each([
  ['8 (927) 000-00-00', '+79270000000'],
  ['+7 960 000 00 00', '+79600000000'],
  ['+86 000 000 0000', '+860000000000'],
  ['8 927 (000)-00-00', '+79270000000'],
  ['8-927-000-00-00', '+79270000000'],
])('Testing the validatePhoneNumbers function with the number: %s and expected number: %s', (number, expectedNumber) => {
  const validNumber = validatePhoneNumbers(number);
  expect(validNumber).toBe(expectedNumber);
});
