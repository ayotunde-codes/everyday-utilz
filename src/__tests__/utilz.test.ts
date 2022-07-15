import {
  deleteIndex,
  isCountry,
  isEmail,
  isEmptyString,
  isLowerCase,
  isUpperCase,
  lowerCaseFirst,
  reverseString,
  stringToArray,
  ucAllFirst,
  ucFirst,
  upperCaseFirst,
} from '../index';

// 🀄 isEmpty
test('Is empty string', () => {
  expect(isEmptyString('Carl')).toBe(false);
  expect(isEmptyString('')).toBe(true);
});

// 🀄 isEmail
test('Is email', () => {
  expect(isEmail('Carl')).toBe(false);
  expect(isEmail('you@gmail.com')).toBe(true);
});

// 🀄 deleteIndex
test('delete specific index', () => {
  const array = ['a', 'b', 'c', 'd'];
  expect(deleteIndex(array, 2)).toStrictEqual(['a', 'b', 'd']);
});

// 🀄 isCountry
test('is a country', () => {
  expect(isCountry('nigeria')).toBe(true);
  expect(isCountry('not')).toBe(false);
});

// 🀄 stringToArray
test('change string to array', () => {
  expect(stringToArray('nigeria')).toStrictEqual(['n', 'i', 'g', 'e', 'r', 'i', 'a']);
  expect(isCountry('nigeria')).not.toStrictEqual('nigeria');
});

// 🀄 isUppercase
test('check if the entire string is in upper case', () => {
  expect(isUpperCase('nigeria')).toBe(false);
  expect(isUpperCase('nigeRIA')).toBe(false);
  expect(isUpperCase('NIGeRIA')).toBe(false);
  expect(isUpperCase('NIGERIA')).toBe(true);
  expect(isUpperCase('NIGERIA IS A COUNTRY')).toBe(true);
  expect(isUpperCase('NIGERIA IS A COUNTry')).toBe(false);
  expect(isUpperCase('NIGERIA IS A COuNTry')).toBe(false);
});

// 🀄 isLowercase
test('check if the entire string is in lower case', () => {
  expect(isLowerCase('nigeria')).toBe(true);
  expect(isLowerCase('nigeRIA')).toBe(false);
  expect(isLowerCase('NIGeRIA')).toBe(false);
  expect(isLowerCase('NIGERIA')).toBe(false);
  expect(isLowerCase('NIGERIA IS A COUNTRY')).toBe(false);
  expect(isLowerCase('NIGERIA IS A COUNTry')).toBe(false);
  expect(isLowerCase('nigeria is a country')).toBe(true);
});

// 🀄 reverseString
test('reverse a string value', () => {
  expect(reverseString('nigeria')).toBe('airegin');
});

// 🀄 lcFirst
test('make first letter of a string lowercase', () => {
  expect(lowerCaseFirst('Nigeria')).toBe('nigeria');
  expect(lowerCaseFirst('Nigeria')).not.toBe('Nigeria');
});

// 🀄 ucFirst
test('make first letter of a string uppercase', () => {
  expect(upperCaseFirst('Nigeria')).toBe('Nigeria');
  expect(upperCaseFirst('nigeria')).toBe('Nigeria');
  expect(upperCaseFirst('nigeria')).not.toBe('nigeria');
});

// 🀄 ucAllFirst
test('make first letter  of a word in a string  to uppercase', () => {
  expect(ucAllFirst('Nigeria we are here')).toBe('Nigeria We Are Here');
  expect(ucAllFirst('nigeria')).toBe('Nigeria');
  expect(ucAllFirst('nigeria')).not.toBe('nigeria');
});
