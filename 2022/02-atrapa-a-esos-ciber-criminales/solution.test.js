const fs = require('fs');
const getSentence = require('./solution');

describe('getSentence', () => {
  const testCases = [
    {
      input: '109105100117',
      output: 'midu',
    },
    {
      input: '9911110010110998101114',
      output: 'codember',
    },
    {
      input: '9911110010110998101114 109105100117',
      output: 'codember midu',
    },
    {
      input: '11210897121 116101116114105115',
      output: 'play tetris',
    },
  ];

  it('should return a string', () => {
    expect(typeof getSentence('109105100117')).toBe('string');
  });

  it('should return "thanks for playing codember please share"', () => {
    const input = fs.readFileSync(
      './2022/02-atrapa-a-esos-ciber-criminales/encrypted.txt',
      'utf8',
    );
    expect(getSentence(input)).toBe('thanks for playing codember please share');
  });

  it.each(testCases)('should return $output', (testCase) => {
    expect(getSentence(testCase.input)).toBe(testCase.output);
  });
});
