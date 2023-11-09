const getSentence = (code) => {
  let sentence = '';
  code.split(' ').forEach((el) => {
    const numberASCII = [];
    let numberTemp = '';
    let word = '';
    el.split('').forEach((item) => {
      numberTemp += item;
      if (Number(numberTemp) >= 97 && Number(numberTemp) <= 122) {
        numberASCII.push(numberTemp);
        numberTemp = '';
      }
    });
    numberASCII.forEach((item) => (word += String.fromCharCode(Number(item))));
    sentence += `${word} `;
  });
  return sentence.trim();
};

module.exports = getSentence;

