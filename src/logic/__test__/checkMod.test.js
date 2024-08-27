import { checkMod3, checkMod5 } from "../checkMod";

test('３の倍数の場合はtrueを返す', () => {
  expect(checkMod3(3)).toBe(true);
  expect(checkMod3(6)).toBe(true);
  expect(checkMod3(9)).toBe(true);
});
test('３の倍数でない場合はfalseを返す', () => {
  expect(checkMod3(1)).toBe(false);
  expect(checkMod3(2)).toBe(false);
  expect(checkMod3(4)).toBe(false);
});

test('５の倍数の場合はtrueを返す', () => {
  expect(checkMod5(5)).toBe(true);
  expect(checkMod5(10)).toBe(true);
  expect(checkMod5(20)).toBe(true);
});

test('５の倍数でない場合はfalseを返す', () => {
  expect(checkMod5(1)).toBe(false);
  expect(checkMod5(11)).toBe(false);
  expect(checkMod5(21)).toBe(false);
});