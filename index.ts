export function Calculator() {
	this.add = add;
}

function add(numbers: string): number {
	if (numbers === '') {
		return 0;
    }
    
    checkForNegatives(numbers);

	const pattern = new RegExp(`[${delimeter(numbers)}\n]+`);
	return numbers
		.split(pattern)
		.filter((n) => n && !isNaN(+n))
		.map((n) => parseInt(n))
		.reduce((sum, val) => sum + val, 0);
}

function delimeter(numbers: string): string {
	if (numbers.startsWith('//')) {
		return numbers.slice(2)[0];
	} else {
		return ',';
	}
}

function checkForNegatives(numbers: string) {
    const negatives = numbers.match(/\-[1-9]\d{0,3}/g);
    if (negatives && negatives.length > 0) {
        throw new Error(`Negatives are not allowed: ${negatives.join(',')}`);
    }
}
