const { expect } = require('chai');
const calculateNumber = require('./2-calcul');

describe('calculateNumber', () => {
    it('should return 4', () => {
        expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });
    
    it('should return -2', () => {
        expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    });
    
    it('should return 0.2', () => {
        expect(calculateNumber('DIVIDE', 1, 5)).to.equal(0.2);
    });
    
    it('should return Error', () => {
        expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
    });
});
