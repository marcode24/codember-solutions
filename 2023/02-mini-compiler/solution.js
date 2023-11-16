const decode = (str) => {
  let resultStr = '';
  const operations = {
    '#': (r) => ++r,
    '@': (r) => --r,
    '*': (r) => r * r,
    '&': (r) => {
      resultStr = resultStr.concat(r.toString());
      return r;
    },
  };

  [...str].reduce((acc, char) => operations[char](acc), 0);

  return resultStr;
};

module.exports = decode;
