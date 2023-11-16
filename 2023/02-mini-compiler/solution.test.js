const fs = require('fs');
const decode = require('./solution');

describe('decode', () => {
  const testsCases = [
    {
      input: '&##&*&@&',
      output: '0243',
    },
    {
      input: '##*&',
      output: '4',
    },
  ];

  it('should return a string type', () => {
    expect(typeof decode('&')).toBe('string');
  });

  it.each(testsCases)('should return $output', (testCase) => {
    expect(decode(testCase.input)).toBe(testCase.output);
  });

  describe('file callenge', () => {
    const expectedOutput = '024899455';
    it(`should return ${expectedOutput}`, () => {
      const str = fs.readFileSync('./2023/02-mini-compiler/message_02.txt', 'utf8');
      expect(decode(str)).toBe(expectedOutput);
    });
  });
});
