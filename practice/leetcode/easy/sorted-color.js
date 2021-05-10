function sortedColor(numbers) {
    const len = numbers.length;
    const count = [0, 0, 0];

    for (let i = 0; i < len; i++) {
        count[numbers[i]]++;
        console.log(count[numbers[i]]);
    }

    let start = 0;
    [0, 1, 2].forEach((item, index) => {
        for (let i = start; i < count[index]; i++, start++) {
            numbers[i] = item;
        }
    })

    return numbers;
}

console.log(sortedColor([1, 2, 0, 2, 1, 0, 1, 2]))