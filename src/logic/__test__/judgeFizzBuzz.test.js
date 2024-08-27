import {judgeFizzBuzz} from '../judgeFizzBuzz';

test('引数が３の倍数かつ５の倍数のときは「FizzBuzz」を返す', () => {
  expect(judgeFizzBuzz(15)).toBe('FizzBuzz');
  expect(judgeFizzBuzz(30)).toBe('FizzBuzz');
  expect(judgeFizzBuzz(45)).toBe('FizzBuzz');
});

test('引数が３の倍数でないかつ５の倍数のときは「Buzz」を返す', () => {
  expect(judgeFizzBuzz(5)).toBe('Buzz');
  expect(judgeFizzBuzz(10)).toBe('Buzz');
  expect(judgeFizzBuzz(20)).toBe('Buzz');
});

test('引数が３の倍数かつ５の倍数でないときは「Fizz」を返す', () => {
  expect(judgeFizzBuzz(3)).toBe('Fizz');
  expect(judgeFizzBuzz(6)).toBe('Fizz');
  expect(judgeFizzBuzz(9)).toBe('Fizz');
});