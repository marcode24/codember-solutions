const findPassword = require('./solution');

describe('findPassword', () => {
  it('should return an string type', () => {
    expect(typeof findPassword()).toBe('string');
  });

  it('should return "165-23555"', () => {
    expect(findPassword()).toBe('165-23555');
  });
});
