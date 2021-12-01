const getPercent = require('../../utils/getPercent')

describe('testing for getPercent function', () => {
    it('should works with valid values', () => {
        expect(getPercent(100, 5)).toBe(5)
        expect(getPercent(50, 100)).toBe(50)
        expect(getPercent(150, 50)).toBe(75)
    });
    it('should works with invalid values', () => {
        expect(getPercent('22', 55)).toBe('Invalid type of input value') 
        expect(getPercent( 22, '55')).toBe('Invalid type of input value') 
    });
});

