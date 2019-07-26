import { Calculator } from "..";
import { expect } from "chai";

describe('simple add', () => {
    const calc = new Calculator();
    it('returns 0 when empty string is passed in', () => {
        expect(calc.add('')).equal(0);
    });
    it('sums when numbers are passed in with comma separator', () => {
        expect(calc.add('1,2,5')).equal(8);
        expect(calc.add('0,2,5')).equal(7);
        expect(calc.add('1,1,1,')).equal(3);
        expect(calc.add(',')).equal(0);
    });
    it('sums numbers with newline present', () => {
        expect(calc.add('1\n,2,3')).equal(6);
        expect(calc.add('1,\n2,4')).equal(7);
        expect(calc.add('\n')).equal(0);
        expect(calc.add(',\n')).equal(0);
    });
    it('sums numbers with custom delimeter', () => {
        expect(calc.add('//$\n1$2$3')).equal(6);
        expect(calc.add('//@\n2@3@8')).equal(13);
    });
    it('does not support negative numbers', () => {
        expect(() => calc.add('-1')).to.throw('Negatives are not allowed: -1');
        expect(() => calc.add('1,-2,-1')).to.throw('Negatives are not allowed: -2,-1');
        expect(() => calc.add('1\n,-10')).to.throw('Negatives are not allowed: -10');
        expect(() => calc.add('//$\n1$-100$2')).to.throw('Negatives are not allowed: -100');
    });
    it('should ignore numbers larger than 1000', () => {
        expect(calc.add('2, 1000')).equal(1002);
        expect(calc.add('2,1001')).equal(2);
    });
    it('should allow arbitary length delimeters', () => {
        expect(calc.add('//***\n1***2***3')).equal(6);
    });
    it('should allow for multiple delimeters', () => {
        expect(calc.add('//$,@\n1$2@3')).equal(6);
    });
});