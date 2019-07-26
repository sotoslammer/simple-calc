import { Calculator } from "..";
import { expect } from "chai";

describe('simple add', () => {
    const calc = new Calculator();
    it('returns 0 when empty string is passed in', () => {
        const result = calc.add('');
        expect(result).equal(0);
    });
    it('sums when numbers are passed in with comma separator', () => {
        var result = calc.add('1,2,5');
        expect(result).equal(8);

        result = calc.add('0,2,5');
        expect(result).equal(7);

        result = calc.add('1,1,1,');
        expect(result).equal(3);

        result = calc.add(',');
        expect(result).equal(0);
    });
    it('sums numbers with newline present', () => {
        var result = calc.add('1\n,2,3');
        expect(result).equal(6);

        result = calc.add('1,\n2,4');
        expect(result).equal(7);

        result = calc.add('\n');
        expect(result).equal(0);

        result = calc.add(',\n')
        expect(result).equal(0);
    });
    it('sums numbers with custom delimeter', () => {
        var result = calc.add('//$\n1$2$3');
        expect(result).equal(6);

        result = calc.add('//@\n2@3@8');
        expect(result).equal(13);
    });
    it('does not support negative numbers', () => {
        expect(() => calc.add('-1')).to.throw('Negatives are not allowed: -1');
        expect(() => calc.add('1,-2,-1')).to.throw('Negatives are not allowed: -2,-1');
        expect(() => calc.add('1\n,-10')).to.throw('Negatives are not allowed: -10');
        expect(() => calc.add('//$\n1$-100$2')).to.throw('Negatives are not allowed: -100');
    });
    it('should ignore numbers larger than 1000', () => {
        var results = calc.add('2, 1000');
        expect(results).equal(1002);

        results = calc.add('2,1001');
        expect(results).equal(2);
    })
});