import { Calculator } from "..";
import { expect } from "chai";

describe('simple add', () => {
    const calc = new Calculator();
    it('returns 0 when empty string is passed in', () => {
        const result = calc.add('');
        expect(result).equal(0);
    });
    it('sums when numbers are passed in with comma separator', () => {
        var result = calc.add('1,2,5')
        expect(result).equal(8);

        result = calc.add('0,2,5')
        expect(result).equal(7);

        result = calc.add('1,1,1,')
        expect(result).equal(3);

        result = calc.add(',')
        expect(result).equal(0);
    });
    
});