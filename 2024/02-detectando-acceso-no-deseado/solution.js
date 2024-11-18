/* eslint-disable no-restricted-syntax */
const fs = require('fs');

function isValidPassword(password) {
  let hasLetters = false;
  let lastDigit = -1;
  let lastChar = '';

  for (const char of password) {
    if (/\d/.test(char)) {
      if (hasLetters) return false;
      const digit = Number(char);
      if (digit < lastDigit) return false;
      lastDigit = digit;
    } else if (/[a-z]/.test(char)) {
      hasLetters = true;
      if (char < lastChar) return false;
      lastChar = char;
    } else {
      return false;
    }
  }

  return true;
}

function countValidInvalidPasswords(filePath) {
  const data = fs.readFileSync(filePath, 'utf8');
  const passwords = data
    .split('\n')
    .map((pwd) => pwd.trim())
    .filter(Boolean);

  let validCount = 0;
  let invalidCount = 0;

  passwords.forEach((password) => {
    if (isValidPassword(password)) {
      validCount++;
    } else {
      invalidCount++;
    }
  });

  return `submit ${validCount}true${invalidCount}false`;
}

module.exports = {
  isValidPassword,
  countValidInvalidPasswords,
};
