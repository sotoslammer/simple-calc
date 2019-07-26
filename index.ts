export function Calculator() {
	this.add = add;
}

function add(numbers: string): number {
	if (numbers === '') {
		return 0;
    }
    
    checkForNegatives(numbers);

	return numbers
		.split(new RegExp(`[${delimeter(numbers)}\n]+`))
		.filter((n) => n && !isNaN(+n))
        .map((n) => parseInt(n))
        .filter((n) => n <= 1000)
		.reduce((sum, val) => sum + val, 0);
}

function delimeter(numbers: string): string {
	if (numbers.startsWith('//')) {
		return numbers.match(new RegExp('^\/{2}(.+)\\n', 'gm')).join();
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
