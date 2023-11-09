const getMaxZebra = (colors) => {
  let maxZebra = 1;
  let actualZebra = 1;
  let lastColor = colors[0];

  colors.forEach((_, index) => {
    if (colors[index] === colors[index + 1]) return (actualZebra = 1);
    if (colors[index + 1] !== colors[index - 1]) return (actualZebra = 2);
    actualZebra++;

    if (actualZebra >= maxZebra) {
      maxZebra = actualZebra;
      lastColor = colors[index - 1];
    }
    return null;
  });
  return `${maxZebra}@${lastColor}`;
};

module.exports = getMaxZebra;
