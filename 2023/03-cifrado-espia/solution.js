const validatePasswords = (passwords) => {
  const validPasswords = [];
  const invalidPasswords = [];

  passwords.forEach((password) => {
    const [policy, str] = password.split(':');
    const [range, letter] = policy.split(' ');
    const [min, max] = range.split('-');
    const regex = new RegExp(letter, 'g');
    const matches = str.match(regex);
    const count = matches ? matches.length : 0;

    if (count >= min && count <= max) {
      validPasswords.push(str.trim());
    } else {
      invalidPasswords.push(str.trim());
    }
  });
  return { validPasswords, invalidPasswords };
};

module.exports = validatePasswords;
