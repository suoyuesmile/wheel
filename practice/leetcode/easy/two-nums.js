function twoNums(numbers, target) {
    const len = numbers.length;
    const map = new Map([]);

    for (let i = 0; i < len; i++) {
        map.set(numbers[i], i);
    }

    for (let i = 0; i < len; i++) {
        const pattern = target - numbers[i];
        const patternIndex = map.get(pattern);

        if (pattern && i !== patternIndex) {
            return [i, patternIndex];
        }
    }
}

console.log(twoNums([2, 3, 4], 6));