function moveZero(numbers) {
    const len = numbers.length;
    const notZeroArr = [];

    for (let i = 0; i < len; i++) {
        if (numbers[i]) {
            notZeroArr.push(numbers[i]);
        }
    }

    for (let i = 0; i < notZeroArr.length; i++) {
        numbers[i] = notZeroArr[i];
    }

    for (let i = notZeroArr.length; i < len; i++) {
        numbers[i] = 0;
    }

    return numbers;
}

// 优化
function moveZero1(numbers) {
    const len = numbers.length;

    let k = 0;
    for (let i = 0; i < len; i++) {
        if (numbers[i]) {
            numbers[k] = numbers[i];
            k++;
        }
    }

    for (let i = k; i < len; i++) {
        numbers[i] = 0;
    }
    return numbers;
}

function moveZero2(numbers) {
    const len = numbers.length;

    for (let i = 0, k = 0; i < len; i++) {
        if (numbers[i]) {
            if (i !== k) {
                let tmp = numbers[k];
                numbers[k] = numbers[i];
                numbers[i] = tmp;
            }

            k++;
        }
    }
    return numbers;
}





// console.log(moveZero([0, 1, 0, 3, 1, 1]));
console.log(moveZero2([0, 1, 0, 3, 1, 1]));