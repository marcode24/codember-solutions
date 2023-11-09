const fs = require('fs');
const getMaxZebra = require('./solution');

describe('getMaxZebra', () => {
  it('should return an string type', () => {
    expect(typeof getMaxZebra(['red', 'red', 'red'])).toBe('string');
  });

  it('should return "30@red"', () => {
    const colors = JSON.parse(
      fs.readFileSync('./2022/03-zebra-de-colores/colors.txt', 'utf8'),
    );

    expect(getMaxZebra(colors)).toBe('30@red');
  });
});
