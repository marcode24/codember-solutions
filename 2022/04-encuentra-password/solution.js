const findPassword = () => {
  const greaterOrEqual = (num) => {
    let result = false;
    num = num.split('');
    for (let i = 0; i < num.length - 1; i++) {
      if (Number(num[i]) <= Number(num[i + 1])) {
        result = false;
      } else {
        result = true;
        break;
      }
    }
    return result;
  };

  const results = [];
  for (let i = 11098; i <= 98123; i++) {
    const indexTemp = String(i);
    if (
      indexTemp.split('').filter((el) => Number(el) === 5).length >= 2
      && !greaterOrEqual(indexTemp)
    ) {
      results.push(i);
    }
  }
  return `${results.length}-${results.at(55)}`;
};

module.exports = findPassword;
