const fs = require('fs');

const obtenerUsuariosIncorrectos = (fileName) => {
  let results = [];
  try {
    const text = fs.readFileSync(`./2022/01-arregla-twitter/${fileName}`, 'utf8');
    const arr = text.toString().split(/\n\s*\n/).map((el) => el.replace(/\n/g, ' '));
    results = arr.filter((data) => data.includes('usr:')
            && data.includes('eme:')
            && data.includes('psw:')
            && data.includes('age:')
            && data.includes('loc:')
            && data.includes('fll:'));
    return `submit: ${results.length}${results.at(-1)}`;
  } catch (e) {
    return `Error: ${e.message}`;
  }
};

module.exports = obtenerUsuariosIncorrectos;
