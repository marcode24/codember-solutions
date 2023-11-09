const getPatron = (str) => {
  const words = str
    .toLowerCase()
    .split(' ')
    .reduce((acc, word) => {
      acc[word] = (acc[word] || 0) + 1;
      return acc;
    }, {});

  return Object.entries(words)
    .map(([key, value]) => `${key}${value}`)
    .join('');
};

module.exports = getPatron;
