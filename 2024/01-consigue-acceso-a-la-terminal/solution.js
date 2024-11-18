/* eslint-disable implicit-arrow-linebreak */
const processCombination = (start, moves) => {
  const digits = Array.from(start, Number);
  let positionInitial = 0;
  const totalDigits = digits.length;

  const actions = {
    U: () => (digits[positionInitial] = (digits[positionInitial] + 1) % 10),
    D: () =>
      (digits[positionInitial] = (digits[positionInitial] - 1 + 10) % 10),
    R: () => (positionInitial = (positionInitial + 1) % totalDigits),
    L: () =>
      (positionInitial = (positionInitial - 1 + totalDigits) % totalDigits),
  };

  [...moves].forEach((move) => actions[move]());

  return digits.join('');
};

module.exports = processCombination;
