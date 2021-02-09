import { validPassword } from '../validPassword';

describe('validPassword', () => {
  test('minimun 8 chars', () => {
    expect(validPassword('')).toBe(false);
    expect(validPassword('a')).toBe(false);
    expect(validPassword('1234567')).toBe(false);
  });

  test('no valid input', () => {
    expect(validPassword('12345678')).toBe(false);
    expect(validPassword('aaaaaaaa')).toBe(false);
    expect(validPassword('........')).toBe(false);
  });

  test('valid input', () => {
    expect(validPassword('123456aA')).toBe(true);
    expect(validPassword('12345.aA')).toBe(true);
  });

  test('maximun 24 chars', () => {
    expect(validPassword('12345.aA12345678901234567')).toBe(false);
    expect(validPassword('12345.aA1234567890123456')).toBe(true);
  });
});
