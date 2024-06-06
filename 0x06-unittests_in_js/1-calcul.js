function calculateNumber(type, a, b) {
    if (type === 'SUM') {
        return Math.round(a) + Math.round(b);
    } else if (type === 'SUBTRACT') {
        return Math.round(a) - Math.round(b);
    } else if (type === 'DIVIDE') {
        if (Math.round(b) === 0) {
            throw new Error('Error');
        }
        return Math.round(a) / Math.round(b);
    } else {
        throw new Error('Invalid type');
    }
}

module.exports = calculateNumber;
