const processCombination = require('./solution');

describe('2024 | 01-consigue-acceso-a-la-terminal', () => {
  const testCases = [
    {
      input: ['000', 'URURD'],
      output: '119',
    },
    {
      input: ['1111', 'UUURUUU'],
      output: '4411',
    },
    {
      input: ['9999', 'LULULULD'],
      output: '8000',
    },
    {
      input: ['528934712834', 'URDURUDRUDLLLLUUDDUDUDUDLLRRRR'],
      output: '628934712834',
    },
  ];

  it.each(testCases)('should return $output', ({ input, output }) => {
    expect(processCombination(...input)).toBe(output);
  });
});
