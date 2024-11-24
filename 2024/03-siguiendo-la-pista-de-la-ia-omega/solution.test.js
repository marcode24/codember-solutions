const { processTraceFile, calculateSteps } = require('./solution');

describe('2024 | 03-siguiendo-la-pista-de-la-ia-omega', () => {
  describe('calculateSteps', () => {
    const TEST_CASES = [
      {
        input: '1 2 4 1 -2',
        output: 5,
      },
      {
        input: '0 1 2 3 -1',
        output: 6,
      },
      {
        input: '1 -2 5',
        output: 2,
      },
    ];

    it.each(TEST_CASES)('should return $output', ({ input, output }) => {
      const instructions = input.split(' ').map(Number);
      expect(calculateSteps(instructions)).toBe(output);
    });
  });

  describe('processTraceFile', () => {
    const TEST_CASES = [
      {
        input: './2024/03-siguiendo-la-pista-de-la-ia-omega/trace.txt',
        output: 'submit 453-15',
      },
    ];

    it.each(TEST_CASES)('should return $output', ({ input, output }) => {
      expect(processTraceFile(input)).toBe(output);
    });
  });
});
