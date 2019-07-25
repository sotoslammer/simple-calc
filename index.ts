export function Calculator() {
    this.add = add;
}

function add(numbers: string): number {
    if (numbers === "") {
        return 0;
    }

    return numbers.split(',')
    .filter((n) => n)
    .map((n) => parseInt(n))
    .reduce((sum, val) => sum + val, 0);
}   