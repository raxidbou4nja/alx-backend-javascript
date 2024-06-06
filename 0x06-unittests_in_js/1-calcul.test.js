const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    describe('SUM', () => {
        it('should return 4 when inputs are 1.4 and 2.6', () => {
            assert.strictEqual(calculateNumber('SUM', 1.4, 2.6), 4);
        });

        it('should return 5 when inputs are 1.5 and 2.6', () => {
            assert.strictEqual(calculateNumber('SUM', 1.5, 2.6), 5);
        });

        it('should return 0 when inputs are 0.1 and 0.3', () => {
            assert.strictEqual(calculateNumber('SUM', 0.1, 0.3), 0);
        });

        it('should return -3 when inputs are -1.2 and -1.8', () => {
            assert.strictEqual(calculateNumber('SUM', -1.2, -1.8), -3);
        });

        it('should return 0 when inputs are 0.4 and 0.4', () => {
            assert.strictEqual(calculateNumber('SUM', 0.4, 0.4), 0);
        });
    });

    describe('SUBTRACT', () => {
        it('should return -1 when inputs are 1.4 and 2.6', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 2.6), -1);
        });

        it('should return -1 when inputs are 1.5 and 2.6', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 2.6), -1);
        });

        it('should return 0 when inputs are 0.1 and 0.1', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 0.1, 0.1), 0);
        });

        it('should return 1 when inputs are 0.9 and 0.1', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 0.9, 0.1), 1);
        });

        it('should return 3 when inputs are 4.5 and 1.2', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 4.5, 1.2), 3);
        });
    });

    describe('DIVIDE', () => {
        it('should return 2 when inputs are 6 and 3', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 6, 3), 2);
        });

        it('should return -3 when inputs are -9 and 3', () => {
            assert.strictEqual(calculateNumber('DIVIDE', -9, 3), -3);
        });

        it('should return "Error" when attempting to divide by zero', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 10, 0), 'Error');
        });

        it('should return 1 when inputs are 0.9 and 0.9', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 0.9, 0.9), 1);
        });

        it('should return 5 when inputs are 10.5 and 2.2', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 10.5, 2.2), 5);
        });
    });
});
