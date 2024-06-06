const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    it('should return 4', () => {
        assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    });
    
    it('should return -2', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
    });
    
    it('should return 0.2', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1, 5), 0.2);
    });
    
    it('should return Error', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1, 0), 'Error');
    });
    });
