const obtenerUsuariosIncorrectos = require('./solution');

describe('obtenerUsuariosIncorrectos', () => {
  const expected = 'submit: 156usr:@giroz age:22 src:12 icon:avatar.png terminal:yes pages:server '
    + 'pages:blog blog:about loc:tierra psw:aaa fll:222 eme:giroz@gmail.com';

  it(`should return "${expected}"`, () => {
    expect(obtenerUsuariosIncorrectos('users.txt')).toBe(expected);
  });

  const expectedError = 'Error: ENOENT: no such file or directory, open \'./2022/01-arregla-twitter/users2.txt\'';

  it(`should return "${expectedError}"`, () => {
    expect(obtenerUsuariosIncorrectos('users2.txt')).toBe(expectedError);
  });
});
