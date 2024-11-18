const { isValidPassword, countValidInvalidPasswords } = require('./solution');

describe('2024 | 02-detectando-acceso-no-deseado', () => {
  describe('isValidPassword', () => {
    const TEST_CASES = [
      {
        input: '1234',
        output: true,
      },
      {
        input: 'abc',
        output: true,
      },
      {
        input: 'aabbcc',
        output: true,
      },
      {
        input: '112233',
        output: true,
      },
      {
        input: 'a123',
        output: false,
      },
      {
        input: '123abc',
        output: true,
      },
      {
        input: 'dbce',
        output: false,
      },
    ];

    it.each(TEST_CASES)('$input should return $output', ({ input, output }) => {
      expect(isValidPassword(input)).toBe(output);
    });
  });

  describe('countValidInvalidPasswords', () => {
    const TEST_CASES = [
      {
        input: './2024/02-detectando-acceso-no-deseado/log.txt',
        output: 'submit 299true198false',
      },
    ];

    it.each(TEST_CASES)('should return $output', ({ input, output }) => {
      expect(countValidInvalidPasswords(input)).toBe(output);
    });
  });
});
