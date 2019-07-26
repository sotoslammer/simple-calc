export function Calculator() {
	this.add = add;
}

function add(numbers: string): number {
	if (numbers === '') {
		return 0;
	}

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
