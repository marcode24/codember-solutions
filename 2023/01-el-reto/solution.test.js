const fs = require('fs');
const getPatron = require('./solution');

describe('getPatron', () => {
  const expectedOutput = 'murcielago15leon15jirafa15cebra6elefante15rinoceronte15hipopotamo15ardilla15mapache15'
  + 'zorro15lobo15oso15puma2jaguar14tigre10leopardo10gato12perro12caballo14vaca14toro14cerdo14oveja14cabra14gallina'
  + '10pato10ganso10pavo10paloma10halcon11aguila11buho11colibri9canario8loro8tucan8pinguino7flamenco7';

  it('should return a string type', () => {
    expect(typeof getPatron('')).toBe('string');
  });

  it(`should return ${expectedOutput}`, () => {
    const str = fs.readFileSync('./2023/01-el-reto/message_01.txt', 'utf8');
    expect(getPatron(str)).toBe(expectedOutput);
  });
});
