const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 4 when inputs are 1.4 and 2.6', () => {
    assert.strictEqual(calculateNumber(1.4, 2.6), 4);
  });

  it('should return 5 when inputs are 1.5 and 2.6', () => {
    assert.strictEqual(calculateNumber(1.5, 2.6), 5);
  });

  it('should return 0 when inputs are 0.1 and 0.3', () => {
    assert.strictEqual(calculateNumber(0.1, 0.3), 0);
  });

  it('should return -3 when inputs are -1.2 and -1.8', () => {
    assert.strictEqual(calculateNumber(-1.2, -1.8), -3);
  });

  it('should return 0 when inputs are 0.4 and 0.4', () => {
    assert.strictEqual(calculateNumber(0.4, 0.4), 0);
  });
});
