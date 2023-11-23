const fs = require('fs');
const validatePasswords = require('./solution');

describe('validatePasswords', () => {
  it('should return an object type', () => {
    expect(typeof validatePasswords([])).toBe('object');
  });

  it('should return an object with validPasswords and invalidPasswords properties', () => {
    const passwords = fs.readFileSync('./2023/03-cifrado-espia/encryption_policies.txt', 'utf8').split('\n');
    const { validPasswords, invalidPasswords } = validatePasswords(passwords);
    expect(validPasswords).toBeDefined();
    expect(invalidPasswords).toBeDefined();

    expect(validPasswords).toHaveLength(21);
    expect(invalidPasswords).toHaveLength(479);

    expect(invalidPasswords[41]).toBe('bgamidqewtbus');
  });
});
