/* eslint-disable operator-linebreak */
const obtenerUsuariosIncorrectos = require('./solution');

describe('obtenerUsuariosIncorrectos', () => {
  // eslint-disable-next-line operator-linebreak
  const expected =
    'submit: 156usr:@giroz age:22 src:12 icon:avatar.png terminal:yes pages:server ' +
    'pages:blog blog:about loc:tierra psw:aaa fll:222 eme:giroz@gmail.com';

  it(`should return "${expected}"`, () => {
    expect(obtenerUsuariosIncorrectos('users.txt')).toBe(expected);
  });

  it("should return no such file o directory error'", () => {
    const FILE_NAME = 'users2.txt';
    expect(obtenerUsuariosIncorrectos(FILE_NAME)).toBe(
      `Error: when reading file ${FILE_NAME}`,
    );
  });
});
